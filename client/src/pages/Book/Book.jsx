import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../API';
import {
  Section,
  Header,
  Cover,
  BookInfo,
  Main,
  Image,
  Title,
  Author,
  WishList,
  BuyNow,
  Description,
  Categories,
  WishListBtn,
} from './Book.styles';

import FavoriteIcon, { Favorite } from '@material-ui/icons';

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState('');
  const [description, setDescription] = useState([]);

  // Get book
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await API.getBook(id);
        let splitDescription = res[0].description.split(/\r?\n/);
        setDescription(splitDescription);
        setBook(res[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBook();
  }, []);

  return (
    <Main>
      <Section>
        <Cover>
          <figure>
            <Image src={book.image}></Image>
          </figure>
        </Cover>
        <Header>
          <Title>{book.title}</Title>
          <Author>
            <span>BY </span>
            {book.author}
          </Author>
        </Header>
        <BookInfo>
          <WishList>
            <WishListBtn>
              <Favorite className="heart"></Favorite>
              Add to wish list
            </WishListBtn>
          </WishList>
          <BuyNow>
            <p className="type">THE EBOOK</p>
            <p className="availability">This eBook is available for purchase</p>
            <p className="price">Buy the eBook: CAD ${book.price}</p>
            <button>Buy now</button>
          </BuyNow>
          <Description>
            {description?.map((para, i) => {
              console.log('trying');
              if (para === '') {
                return <br></br>;
              }

              return <p key={i}>{para}</p>;
            })}
          </Description>
          <Categories></Categories>
        </BookInfo>
      </Section>
    </Main>
  );
};

export default Book;
