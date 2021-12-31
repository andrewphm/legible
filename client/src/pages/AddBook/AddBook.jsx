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

//Firebase
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import App from '../../firebase';

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
  image: '',
};

const initialReview = {
  name: '',
  description: '',
};

const AddBook = () => {
  const [book, setBook] = useState(initialForm);
  const [review, setReview] = useState(initialReview);
  const [reviews, setReviews] = useState([]);
  const [file, setFile] = useState(null);

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

      setReview((prev) => {
        return {
          name: '',
          description: '',
        };
      });
    }
  };

  const handleDelete = (e, i) => {
    e.preventDefault();

    setReviews((prev) => {
      prev.splice(i, 1);

      return [...prev];
    });
  };

  const handleFormClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(App);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log({ ...book, image: downloadURL });
        });
      }
    );
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
      {console.log(book)}
      <FormHeading>Add New Book</FormHeading>
      <Form>
        <InputWrapper>
          <InputContainer>
            <Label>Title</Label>
            <Input
              onChange={handleChange}
              name="title"
              required
              placeholder="Title"
              value={book.title}
            />
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Label>Author</Label>
            <Input
              onChange={handleChange}
              name="author"
              required
              placeholder="Author"
              value={book.author}
            />
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Label>Price</Label>
            <Input
              onChange={handleChange}
              name="price"
              required
              placeholder="Price"
              value={book.price}
            />
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Label>Description</Label>
            <TextArea
              onChange={handleChange}
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
              onChange={handleChange}
              rows="2"
              name="category"
              required
              placeholder='Separate categories by commas, eg. "Fiction, Comedy, Adventure"...'
              value={book.category.join(', ')}
            />
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer className="input__container-small">
            <Label>Publisher</Label>
            <Input
              onChange={handleChange}
              name="details-publisher"
              placeholder="Publisher"
              value={book.details.publisher}
            />
          </InputContainer>
          <InputContainer className="input__container-small">
            <Label>Release Date</Label>
            <Input
              onChange={handleChange}
              name="details-releaseDate"
              placeholder="eg. September 15th, 2020"
              value={book.details.releaseDate}
            />
          </InputContainer>
          <InputContainer className="input__container-small">
            <Label>ISBN</Label>
            <Input
              onChange={handleChange}
              name="details-ISBN"
              placeholder="ISBN"
              value={book.details.ISBN}
            />
          </InputContainer>
          <InputContainer className="input__container-small">
            <Label>Language</Label>
            <Input
              onChange={handleChange}
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
              required
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            ></Input>
          </InputContainer>
        </InputWrapper>

        <button type="submit" onSubmit={handleFormClick}>
          Add Book
        </button>
      </Form>
    </Main>
  );
};

export default AddBook;
