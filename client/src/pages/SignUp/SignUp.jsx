import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

import { Visibility, VisibilityOff } from '@material-ui/icons';

import defaultAvatar from '../../assets/Auth/defaultAvatar.png';

// API
import API from '../../API';

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
  Warning,
} from './SignUp.styles';

const initialForm = {
  email: '',
  password: '',
  username: '',
  displayName: '',
  confirmPassword: '',
  marketing: false,
  country: '',
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

  const handleContinueClick = async (e) => {
    e.preventDefault();
    // Validate username is unique
    const isUnique = await API.checkUniqueUser({ email: form.email });

    let container = document.getElementById('email-container');
    let label = document.getElementById('email-label');
    let warning = document.getElementById('warning');
    let passwordContainers = document.querySelectorAll('.password-container');
    let passwordWarning = document.getElementById('password-warning');
    let passwordLabels = document.querySelectorAll('.password-label');

    if (!isUnique) {
      // Outline box red
      // Display modal
      warning.style.display = 'flex';
      label.style.color = 'rgb(203, 14, 14)';
      container.style.border = '1px solid rgb(203, 14, 14)';
    } else if (form.password !== form.confirmPassword) {
      container.style.border = '1px solid rgb(121, 146, 154)';
      label.style.color = 'var(--primary-color)';
      warning.style.display = 'none';

      passwordLabels.forEach((ele) => (ele.style.color = 'rgb(203, 14, 14)'));
      passwordWarning.style.display = 'flex';
      passwordContainers.forEach((ele) => {
        ele.style.border = '1px solid rgb(203, 14, 14)';
      });
    } else {
      passwordWarning.style.display = 'none';

      passwordContainers.forEach((ele) => {
        ele.style.border = '1px solid rgb(121, 146, 154)';
      });

      setStep((prev) => (prev += 1));
    }
  };

  return (
    <>
      <StepHeading>SIGN UP TO LEGIBLE - STEP 1 OF 3</StepHeading>
      <FormHeading>Create Account</FormHeading>
      <Form>
        <InputWrapper>
          <InputContainer id="email-container">
            <Input
              placeholder="E-mail"
              type="text"
              name="email"
              autoFocus={true}
              value={form.email}
              onChange={handleFormChange}
              required
            ></Input>
            <Label htmlFor="email" id="email-label">
              Email
            </Label>
          </InputContainer>
          <Warning id="warning">
            <p>This email is already taken.</p>
          </Warning>
        </InputWrapper>
        <InputWrapper>
          <InputContainer className="password-container">
            <Input
              id="password"
              placeholder="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleFormChange}
              required
            ></Input>
            <Label htmlFor="password" className="password-label">
              Password
            </Label>
            {isPassVisible ? (
              <VisibilityOff onClick={handlePassVisibleClick} />
            ) : (
              <Visibility onClick={handlePassVisibleClick} />
            )}
          </InputContainer>
          <p className="requirement">Must have at least 6 characters</p>
        </InputWrapper>
        <InputWrapper>
          <InputContainer className="password-container">
            <Input
              id="confirm-password"
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleFormChange}
              required
            ></Input>
            <Label htmlFor="password" className="password-label">
              Password
            </Label>
            {isConfirmPassVisible ? (
              <VisibilityOff onClick={handleConfirmPassVisibleClick} />
            ) : (
              <Visibility onClick={handleConfirmPassVisibleClick} />
            )}
          </InputContainer>
          <Warning id="password-warning">
            <p>Passwords do not match.</p>
          </Warning>
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
        <ContinueButton onClick={handleContinueClick}>Continue</ContinueButton>
      </Form>
    </>
  );
};

const StepTwo = ({ form, handleFormChange, setStep }) => {
  return (
    <>
      <StepHeading>SIGN UP TO LEGIBLE - STEP 2 OF 3</StepHeading>
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

const StepThree = ({ form, handleFormChange }) => {
  const options = useMemo(() => countryList().getData(), []);

  return (
    <>
      <StepHeading>SIGN UP TO LEGIBLE - STEP 3 OF 3</StepHeading>
      <FormHeading>Country selection</FormHeading>
      <p className="country-info">
        It looks like you’re in Canada! Use the dropdown menu to change
        countries if this is incorrect. Please note that to make purchases from
        Legible,{' '}
        <strong>your billing address must match your country selection.</strong>
      </p>

      <Select
        className="select-country"
        id="select-country"
        options={options}
        value={form.country}
        onChange={handleFormChange}
        placeholder={form.country || 'Type or select...'}
      />

      <ContinueButton>Finish</ContinueButton>
    </>
  );
};

const SignUp = () => {
  const [form, setForm] = useState(initialForm);
  const handleFormChange = (e) => {
    if (e.label) {
      return setForm({ ...form, country: e.label });
    }

    if (e.target.name === 'marketing') {
      return setForm({ ...form, marketing: e.target.checked });
    }

    if (e.target.id === 'select-country') {
      return setForm({ ...form, country: e.target.value });
    }

    return setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [step, setStep] = useState(1);

  return (
    <Main>
      {console.log(form)}
      {step === 1 && (
        <StepOne
          form={form}
          handleFormChange={handleFormChange}
          setStep={setStep}
        ></StepOne>
      )}
      {step === 2 && (
        <StepTwo
          form={form}
          handleFormChange={handleFormChange}
          setStep={setStep}
        ></StepTwo>
      )}
      {step === 3 && (
        <StepThree form={form} handleFormChange={handleFormChange} />
      )}
    </Main>
  );
};

export default SignUp;
