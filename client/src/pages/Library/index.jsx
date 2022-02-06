import React, { useEffect } from 'react';

import Logo from '../../assets/MyLibrary1';

// Router
import { useLocation, Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/userRedux';

// Component
import { LibraryItem } from '../../components/index';

// API
import API from '../../API';
import {
  Heading,
  HeadingContainer,
  LibraryContainer,
  LogoContainer,
  Main,
  Section,
} from './Library.styles';

const Libray = () => {
  const location = useLocation();
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const params = new URLSearchParams(location.search);

  const id = params.get('id');
  const success = params.get('redirect_status');

  useEffect(() => {
    const successPurchase = async () => {
      try {
        // fetch book
        const book = await API.getBook(id);

        // Create Order Document
        let createdOrder = await API.createOrder(
          {
            userId: user._id,
            bookId: id,
            amount: book[0].price,
          },
          user.accessToken
        );

        console.log(createdOrder);

        // Update Users library
        let updatedUser = await API.updateUser(
          {
            ...user,
            library: [...user.library, id],
          },
          user.accessToken
        );
        // Update user state
        dispatch(
          setCurrentUser({ ...updatedUser, accessToken: user.accessToken })
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (id && success && user) {
      successPurchase();
      window.history.replaceState(null, 'Library', '/legible/library');
    }
  }, [id, dispatch, user, success]);

  return (
    <Main>
      <Section>
        <HeadingContainer>
          <LogoContainer>
            <Logo></Logo>
          </LogoContainer>
          <Heading>CURRENTLY READING</Heading>
        </HeadingContainer>

        <LibraryContainer>
          {user.library.length === 0 && (
            <div>
              Your library is currently empty. Purchased books will appear here.
              <Link to="/legible/browse">
                <button className="books-btn">Shop books</button>
              </Link>
            </div>
          )}
          {user.library.map((item, i) => {
            return <LibraryItem key={i} id={item} />;
          })}
        </LibraryContainer>
      </Section>
    </Main>
  );
};

export default Libray;
