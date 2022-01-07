import React, { useState, useEffect } from 'react';

// API
import API from '../../API';
import { BookInfoContainer, ImageWrapper, Item } from './LibraryItem.styles';

const LibraryItem = ({ id }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        let res = await API.getBook(id);
        setBook(res[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBook();
  }, []);

  return (
    <>
      {book && (
        <Item>
          <ImageWrapper>
            <img src={book.image} alt="" />
          </ImageWrapper>
          <BookInfoContainer>
            <p>
              <strong>{book.title}</strong>
            </p>
            <p>by {book.author}</p>
          </BookInfoContainer>
        </Item>
      )}
    </>
  );
};

export default LibraryItem;
