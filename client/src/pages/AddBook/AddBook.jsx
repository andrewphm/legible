import React from 'react';

import {
  Container,
  Main,
  FormHeading,
  Form,
  InputWrapper,
  Label,
  InputContainer,
  Input,
} from './AddBook.styles';

const AddBook = () => {
  return (
    <Main>
      <FormHeading>Add New Book</FormHeading>
      <Form>
        <InputWrapper>
          <InputContainer>
            <Label>Title</Label>
            <Input></Input>
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Label>Author</Label>
            <Input></Input>
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Label>Price</Label>
            <Input></Input>
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Label>Description</Label>
            <Input></Input>
          </InputContainer>
        </InputWrapper>
      </Form>
    </Main>
  );
};

export default AddBook;
