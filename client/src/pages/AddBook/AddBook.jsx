import React, { useState, useEffect } from 'react';

import {
  Main,
  FormHeading,
  Form,
  InputWrapper,
  Label,
  InputContainer,
  Input,
  TextArea,
  ReviewContainer,
  ReviewItem,
} from './AddBook.styles';

const initialForm = {
  title: '',
  author: '',
  price: '',
  description: '',
  category: [],
  details: {
    publisher: '',
    releaseDate: '',
    ISBN: '',
    language: '',
  },
  reviews: [],
  images: {},
};

const initialReview = {
  name: '',
  description: '',
};

const AddBook = () => {
  const [book, setBook] = useState(initialForm);
  const [review, setReview] = useState(initialReview);
  const [reviews, setReviews] = useState([]);
  const [file, setFiles] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === 'category') {
      let value = e.target.value.split(', ');
      setBook((prev) => {
        return {
          ...prev,
          category: value,
        };
      });
      return;
    }

    if (e.target.name === 'price') {
      let num = Number(e.target.value);

      setBook((prev) => {
        return {
          ...prev,
          price: num,
        };
      });
    }

    if (e.target.name.split('-')[0] === 'details') {
      setBook((prev) => {
        return {
          ...prev,
          details: {
            ...book.details,
            [e.target.name.split('-')[1]]: e.target.value,
          },
        };
      });
      return;
    }

    setBook((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleReviewChange = (e) => {
    setReview((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleReviewClick = (e) => {
    e.preventDefault();
    if (review.name !== '') {
      setReviews((prev) => [...prev, review]);
    }
  };

  const handleDelete = (e, i) => {
    e.preventDefault();

    setReviews((prev) => {
      prev.splice(i, 1);

      return [...prev];
    });
  };

  useEffect(() => {
    setBook((prev) => {
      return {
        ...prev,
        reviews,
      };
    });
  }, [reviews]);

  return (
    <Main>
      {console.log(book.price)}
      {console.log(file)}
      <FormHeading>Add New Book</FormHeading>
      <Form onChange={handleChange}>
        <InputWrapper>
          <InputContainer>
            <Label>Title</Label>
            <Input name="title" placeholder="Title" value={book.title} />
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Label>Author</Label>
            <Input name="author" placeholder="Author" value={book.author} />
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Label>Price</Label>
            <Input name="price" placeholder="Price" value={book.price} />
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Label>Description</Label>
            <TextArea
              rows="3"
              name="description"
              placeholder="Description"
              value={book.description}
            />
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Label>Categories</Label>
            <TextArea
              rows="2"
              name="category"
              placeholder='Separate categories by commas, eg. "Fiction, Comedy, Adventure"...'
              value={book.category.join(', ')}
            />
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer className="input__container-small">
            <Label>Publisher</Label>
            <Input
              name="details-publisher"
              placeholder="Publisher"
              value={book.details.publisher}
            />
          </InputContainer>
          <InputContainer className="input__container-small">
            <Label>Release Date</Label>
            <Input
              name="details-releaseDate"
              placeholder="eg. September 15th, 2020"
              value={book.details.releaseDate}
            />
          </InputContainer>
          <InputContainer className="input__container-small">
            <Label>ISBN</Label>
            <Input
              name="details-ISBN"
              placeholder="ISBN"
              value={book.details.ISBN}
            />
          </InputContainer>
          <InputContainer className="input__container-small">
            <Label>Language</Label>
            <Input
              name="details-language"
              placeholder="Language"
              value={book.details.language}
            />
          </InputContainer>
        </InputWrapper>

        <InputWrapper className="input__wrapper-reviews">
          <h3>Reviews</h3>
          <InputContainer>
            <Label>Reviewer</Label>
            <Input
              name="name"
              placeholder="Name"
              onChange={handleReviewChange}
              value={review.name}
            />
          </InputContainer>
          <InputContainer>
            <Label>Review</Label>
            <TextArea
              name="description"
              placeholder="Review Description"
              rows="3"
              onChange={handleReviewChange}
              value={review.description}
            />
          </InputContainer>
          <button onClick={handleReviewClick}>Add Review</button>

          <ReviewContainer id="review-list">
            {reviews &&
              reviews.map((ele, i) => (
                <ReviewItem key={i}>
                  <p>
                    <strong>{ele.name}</strong>
                  </p>
                  <p className="desc">{ele.description}</p>
                  <button
                    className="delete-btn"
                    onClick={(e) => handleDelete(e, i)}
                  >
                    delete
                  </button>
                </ReviewItem>
              ))}
          </ReviewContainer>
        </InputWrapper>

        <InputWrapper>
          <h3>Image</h3>

          <InputContainer>
            <Input
              type="file"
              id="file"
              onChange={(e) => setFiles(e.target.files[0])}
            ></Input>
          </InputContainer>
        </InputWrapper>
      </Form>
    </Main>
  );
};

export default AddBook;
