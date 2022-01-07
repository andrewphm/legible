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

import { Link } from 'react-router-dom';

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
                <Link to={`/purchase/${id}`}>
                  <button>{book.price === 0 ? 'Free' : 'Buy now'}</button>
                </Link>
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
              {book.reviews.length > 1 ? (
                <ReviewsContainer>
                  {book.reviews?.map((review, i) => {
                    return (
                      <p key={i}>
                        "{review.description}" — <span>{review.name}</span>
                      </p>
                    );
                  })}
                </ReviewsContainer>
              ) : (
                <ReviewsContainer>
                  <p>
                    "Whoa! Don’t take those tissues away, I’m not quite cried
                    out just yet! Happy tears, sad tears, who knows where one
                    ends and the other begins!... Beautiful, heart-breaking,
                    heart-warming, uplifting and inspirational." —{' '}
                    <span>Fiction Books</span>
                  </p>
                  <p>
                    "An absolute must read. I devoured this book in its
                    entirety… I am almost speechless… a box of Kleenex is
                    mandatory.I absolutely loved this book, historical fiction
                    at its best!... Definitely worth ten stars." —{' '}
                    <span>Page Turners</span>
                  </p>
                </ReviewsContainer>
              )}
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
