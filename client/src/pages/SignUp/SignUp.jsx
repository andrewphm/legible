import React, { useState } from 'react';

import { Visibility, VisibilityOff } from '@material-ui/icons';

import defaultAvatar from '../../assets/Auth/defaultAvatar.png';

import {
  ContinueButton,
  Form,
  FormHeading,
  ImageContainer,
  Input,
  InputContainer,
  InputWrapper,
  Label,
  Main,
  MarketingContainer,
  StepHeading,
  Terms,
  UserInfoContainer,
} from './SignUp.styles';

const initialForm = {
  email: '',
  password: '',
  username: '',
  displayName: '',
  confirmPassword: '',
  marketing: false,
};

const StepOne = ({ form, handleFormChange, setStep }) => {
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

  const handleFormClick = (e) => {
    e.preventDefault();

    setStep((prev) => (prev += 1));
  };

  return (
    <>
      {console.log('rerendered')}
      <StepHeading>SIGN UP TO LEGIBLE - STEP 1 OF 4</StepHeading>
      <FormHeading>Create Account</FormHeading>
      <Form>
        <InputWrapper>
          <InputContainer>
            <Input
              placeholder="E-mail"
              type="text"
              name="email"
              autoFocus={true}
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
          <label htmlFor="marketing">
            {' '}
            Receive occasional marketing emails from Legible (optional)
          </label>
        </MarketingContainer>
        <ContinueButton onClick={handleFormClick}>Continue</ContinueButton>
      </Form>
    </>
  );
};

const StepTwo = ({ form, handleFormChange, setStep }) => {
  return (
    <>
      <StepHeading>SIGN UP TO LEGIBLE - STEP 2 OF 4</StepHeading>
      <FormHeading>Customize account</FormHeading>
      <p className="info">
        This information will be displayed on your public profile
      </p>
      <ImageContainer>
        <img src={defaultAvatar} alt="" />
      </ImageContainer>
      <UserInfoContainer>
        <h3>{form.displayName ? form.displayName : 'Display Name'}</h3>
        <h4>@{form.username ? form.username : 'Username'}</h4>
      </UserInfoContainer>
      <Form>
        <InputWrapper>
          <InputContainer>
            <Input
              type="text"
              value={form.displayName}
              onChange={handleFormChange}
              placeholder="Display name"
              required
              name="displayName"
            ></Input>
            <Label>Display Name</Label>
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Input
              type="text"
              value={form.username}
              onChange={handleFormChange}
              placeholder="Username"
              required
              name="username"
            ></Input>
            <Label>Username</Label>
          </InputContainer>
          <p className="requirement">
            Your username must have at least 3 characters, and can only contain
            letters, numbers, ‘-’, ‘_’, and ‘.’
          </p>
        </InputWrapper>
        <ContinueButton onClick={() => setStep((prev) => (prev += 1))}>
          Continue
        </ContinueButton>
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
  const [step, setStep] = useState(1);

  return (
    <Main>
      {step === 1 && (
        <StepOne
          form={form}
          setForm={setForm}
          handleFormChange={handleFormChange}
          setStep={setStep}
        ></StepOne>
      )}
      {step === 2 && (
        <StepTwo
          form={form}
          setForm={setForm}
          handleFormChange={handleFormChange}
          setStep={setStep}
        ></StepTwo>
      )}
    </Main>
  );
};

export default SignUp;
