import React, { useState } from 'react';

import { Visibility, VisibilityOff } from '@material-ui/icons';

import {
  ContinueButton,
  Form,
  FormHeading,
  Input,
  InputContainer,
  InputWrapper,
  Label,
  Main,
  MarketingContainer,
  StepHeading,
  Terms,
} from './SignUp.styles';

const initialForm = {
  email: '',
  password: '',
  username: '',
  displayName: '',
  confirmPassword: '',
  marketing: false,
};

const StepOne = ({ form, handleFormChange }) => {
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
              value={form.email}
              onChange={handleFormChange}
              required
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
              value={form.password}
              onChange={handleFormChange}
              required
            ></Input>
            <Label htmlFor="password">Password</Label>
            {isPassVisible ? (
              <VisibilityOff onClick={handlePassVisibleClick} />
            ) : (
              <Visibility onClick={handlePassVisibleClick} />
            )}
          </InputContainer>
          <p className="requirement">Must have at least 6 characters</p>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Input
              id="confirm-password"
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleFormChange}
              required
            ></Input>
            <Label htmlFor="password">Password</Label>
            {isConfirmPassVisible ? (
              <VisibilityOff onClick={handleConfirmPassVisibleClick} />
            ) : (
              <Visibility onClick={handleConfirmPassVisibleClick} />
            )}
          </InputContainer>
        </InputWrapper>
        <Terms>
          By signing up you agree to our{' '}
          <a href="https://legible.com/terms-of-service">Terms of Service</a>{' '}
          and <a href="https://legible.com/privacy-policy">Privacy Policy.</a>
        </Terms>
        <MarketingContainer>
          <input
            type="checkbox"
            name="marketing"
            id="marketing"
            onChange={handleFormChange}
          ></input>
          <label for="marketing">
            {' '}
            Receive occasional marketing emails from Legible (optional)
          </label>
        </MarketingContainer>
        <ContinueButton>Continue</ContinueButton>
      </Form>
    </>
  );
};

const SignUp = () => {
  const [form, setForm] = useState(initialForm);
  const handleFormChange = (e) => {
    if (e.target.name === 'marketing') {
      return setForm({ ...form, marketing: [e.target.checked] });
    }

    return setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Main>
      <StepOne
        form={form}
        setForm={setForm}
        handleFormChange={handleFormChange}
      ></StepOne>
    </Main>
  );
};

export default SignUp;
