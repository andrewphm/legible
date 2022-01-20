import React, { useState } from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
// Reducers
import { setCurrentUser } from '../../redux/userRedux';
// API
import API from '../../API';

import {
  Form,
  FormHeading,
  Input,
  InputContainer,
  InputWrapper,
  Label,
  Main,
  ContinueButton,
  Warning,
} from '../SignUp/SignUp.styles';

import { Visibility, VisibilityOff } from '@material-ui/icons';

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .button {
    width: 200px;
  }

  .link {
    color: var(--secondary-color);
    font-weight: 600;
    text-decoration: underline;
  }
`;

const initialForm = {
  email: '',
  password: '',
};

const LogIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState(initialForm);
  const dispatch = useDispatch();

  const handleLogInClick = async (e) => {
    e.preventDefault();

    try {
      const res = await API.loginUser(form);
      dispatch(setCurrentUser(res));
    } catch (error) {
      let data = error.response.data;
      let emailContainer = document.getElementById('email-container');
      let emailContainerLabel = document.getElementById('email-label');
      let passwordContainer = document.getElementById('password-container');
      let passwordContainerLabel = document.getElementById('password-label');
      let passwordWarning = document.getElementById('password-warning');
      let emailWarning = document.getElementById('email-warning');

      if (data === 'email') {
        emailContainer.style.border = '1px solid rgb(203, 14, 14)';
        emailContainerLabel.style.color = 'rgb(203, 14, 14)';
        emailWarning.style.display = 'flex';
      }

      if (data === 'password') {
        emailWarning.style.display = 'none';
        passwordWarning.style.display = 'flex';
        emailContainer.style.border = '1px solid var(--primary-color)';
        emailContainerLabel.style.color = 'var(--primary-color)';
        passwordContainer.style.border = '1px solid rgb(203, 14, 14)';
        passwordContainerLabel.style.color = 'rgb(203, 14, 14)';
      }
    }
  };

  const handleDemoLogInClick = async (e) => {
    e.preventDefault();

    try {
      const res = await API.loginUser({
        email: 'demo@gmail.com',
        password: 'demo',
      });
      dispatch(setCurrentUser(res));
    } catch (error) {
      console.log(error);
    }
  };

  const handleVisibilityClick = () => {
    let ele = document.getElementById('password');

    if (!isVisible) {
      ele.type = 'text';
    }

    if (isVisible) {
      ele.type = 'password';
    }
    setIsVisible((prev) => !prev);
  };

  return (
    <Main>
      <FormHeading>Log in to Legible</FormHeading>
      <Form>
        <InputWrapper>
          <InputContainer id="email-container">
            <Input
              placeholder="Email"
              autoComplete="off"
              type="text"
              value={form.email}
              required
              name="email"
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
            <Label id="email-label">Email</Label>
          </InputContainer>
          <Warning id="email-warning">
            <p>This email is currently not registered.</p>
          </Warning>
        </InputWrapper>
        <InputWrapper>
          <InputContainer id="password-container">
            <Input
              id="password"
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="off"
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              required
              value={form.password}
            />
            <Label id="password-label">Password</Label>

            {isVisible ? (
              <VisibilityOff onClick={handleVisibilityClick} />
            ) : (
              <Visibility onClick={handleVisibilityClick} />
            )}
          </InputContainer>
          <Warning id="password-warning">
            <p>Incorrect password, please try again.</p>
          </Warning>
          <Link
            style={{
              color: 'var(--secondary-color)',
              fontWeight: '600',
              textDecoration: 'underline',
            }}
            to="/forgot-password"
          >
            Forgot password?
          </Link>
        </InputWrapper>

        <NavContainer>
          <ContinueButton className="button" onClick={handleLogInClick}>
            Log In
          </ContinueButton>
          <ContinueButton className="button" onClick={handleDemoLogInClick}>
            Demo Log In
          </ContinueButton>
          <p>
            Don't have a Legible account?{' '}
            <Link className="link" to="/sign-up">
              Sign Up.
            </Link>
          </p>
        </NavContainer>
      </Form>
    </Main>
  );
};

export default LogIn;
