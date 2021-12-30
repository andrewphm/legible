import React, { useState } from 'react';

import {
  Main,
  FormHeading,
  Form,
  InputWrapper,
  Label,
  InputContainer,
  Input,
  TextArea,
} from './AddBook.styles';

const initialForm = {
  title: '',
  author: '',
  price: '',
  description: '',
  category: [],
  details: {},
  reviews: [],
  images: {},
};

const AddBook = () => {
  const [book, setBook] = useState(initialForm);

  const handleChange = (e) => {
    if (e.target.name === 'category') {
      let value = e.target.value.split(', ');
      console.log(value);
      setBook((prev) => {
        return {
          ...prev,
          category: value,
        };
      });

      return;
    }

    setBook((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <Main>
      {console.log(book)}
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
              rows="5"
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
      </Form>
    </Main>
  );
};

export default AddBook;
