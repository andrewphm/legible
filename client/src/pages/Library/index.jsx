import React, { useState, useEffect } from 'react';

import Logo from '../../assets/MyLibrary1';

// Router
import { useLocation, useParams, Link } from 'react-router-dom';

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
  const [book, setBook] = useState(null);
  const [purchased, setPurchased] = useState(null);

  const params = new URLSearchParams(location.search);

  const id = params.get('id');
  const success = params.get('redirect_status');

  useEffect(() => {
    const successPurchase = async () => {
      try {
        let res = await API.getBook(id);
        setBook(res[0]);

        let updatedUser = await API.updateUser({
          ...user,
          library: [...user.library, id],
        });
        // Update user state
        dispatch(setCurrentUser({ ...updatedUser }));
      } catch (error) {}
    };

    if (id && success) {
      // Grab book from DB

      // Show success module
      //update user state
      //update db
      try {
        successPurchase();
      } catch (error) {
        console.log(error);
      }
      window.history.replaceState(null, 'Library', '/library');
    }
  }, []);

  console.log(id, success);

  return (
    <Main>
      {console.log(user)}
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
