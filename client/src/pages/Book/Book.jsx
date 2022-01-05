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
  Category,
  Article,
  Reviews,
  ProductDetails,
  ReviewsContainer,
  BookCover,
} from './Book.styles';

import { Favorite } from '@material-ui/icons';

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
      {book && (
        <>
          <Section>
            <BookCover>
              <Header>
                <Title>{book.title}</Title>
                <div className="author">
                  <span>BY </span>
                  <Author>{book.author}</Author>
                </div>
              </Header>
              <Cover>
                <figure>
                  <Image src={book.image}></Image>
                </figure>
              </Cover>

              <WishList>
                <WishListBtn>
                  <Favorite className="heart"></Favorite>
                  Add to wish list
                </WishListBtn>
              </WishList>
            </BookCover>
            <BookInfo>
              <BuyNow>
                <p className="type">THE EBOOK</p>
                <p className="availability">
                  This eBook is available for purchase
                </p>
                <p className="price">Buy the eBook: CAD ${book.price}</p>
                <button>Buy now</button>
              </BuyNow>
              <Description>
                {description?.map((para, i) => {
                  if (para === '') {
                    return <br key={i}></br>;
                  }

                  return <p key={i}>{para}</p>;
                })}
              </Description>
              <Categories>
                <span>Category: </span>
                {book?.category.map((cat, i) => {
                  return <Category key={i}>{cat}</Category>;
                })}
              </Categories>
            </BookInfo>
          </Section>
          <Article>
            <Reviews>
              <h3>REVIEWS</h3>
              <ReviewsContainer>
                {book.reviews?.map((review, i) => {
                  return (
                    <p key={i}>
                      "{review.description}" — <span>{review.name}</span>
                    </p>
                  );
                })}
              </ReviewsContainer>
            </Reviews>
            <ProductDetails>
              <h3>PRODUCT DETAILS</h3>
              <div>
                <div>
                  <p>
                    <strong>Availble in: </strong>
                    eBook
                  </p>
                </div>
                <div>
                  <p>
                    <strong>ISBN: </strong>
                    {book.details.ISBN}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Language: </strong>
                    {book.details.language}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Pubisher: </strong>
                    {book.details.publisher}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Release Date: </strong>
                    {book.details.releaseDate}
                  </p>
                </div>
              </div>
              <div className="button-container">
                <button>Report this title</button>
              </div>
            </ProductDetails>
          </Article>
        </>
      )}
    </Main>
  );
};

export default Book;
