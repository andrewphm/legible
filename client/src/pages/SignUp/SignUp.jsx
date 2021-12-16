import React, { useState } from 'react';

import { Visibility, VisibilityOff } from '@material-ui/icons';

import {
  Form,
  FormHeading,
  Input,
  InputContainer,
  InputWrapper,
  Label,
  Main,
  StepHeading,
} from './SignUp.styles';

const initialForm = {
  email: '',
  password: '',
  username: '',
  displayName: '',
};

const StepOne = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = useState(false);

  const handlePassVisibleClick = () => {
    let ele = document.getElementById('password');
    if (!isPassVisible) {
      ele.type = 'text';
    } else {
      ele.type = 'password';
    }
    setIsPassVisible((prev) => !prev);
  };
  const handleConfirmPassVisibleClick = () => {
    let ele = document.getElementById('confirm-password');
    if (!isConfirmPassVisible) {
      ele.type = 'text';
    } else {
      ele.type = 'password';
    }
    setIsConfirmPassVisible((prev) => !prev);
  };

  return (
    <>
      <StepHeading>SIGN UP TO LEGIBLE - STEP 1 OF 4</StepHeading>
      <FormHeading>Create Account</FormHeading>
      <Form>
        <InputWrapper>
          <InputContainer>
            <Input
              placeholder="E-mail"
              type="text"
              name="email"
              autoFocus="true"
            ></Input>
            <Label htmlFor="email">Email</Label>
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              name="password"
            ></Input>
            <Label htmlFor="password">Password</Label>
            {isPassVisible ? (
              <VisibilityOff onClick={handlePassVisibleClick} />
            ) : (
              <Visibility onClick={handlePassVisibleClick} />
            )}
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Input
              id="confirm-password"
              placeholder="Confirm Password"
              type="password"
              name="password"
            ></Input>
            <Label htmlFor="password">Password</Label>
            {isConfirmPassVisible ? (
              <VisibilityOff onClick={handleConfirmPassVisibleClick} />
            ) : (
              <Visibility onClick={handleConfirmPassVisibleClick} />
            )}
          </InputContainer>
        </InputWrapper>
      </Form>
    </>
  );
};

const SignUp = () => {
  const [form, setForm] = useState(initialForm);

  return (
    <Main>
      <StepOne></StepOne>
    </Main>
  );
};

export default SignUp;
