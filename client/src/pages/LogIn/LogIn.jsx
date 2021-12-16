import React, { useState } from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import {
  Form,
  FormHeading,
  Input,
  InputContainer,
  InputWrapper,
  Label,
  Main,
  ContinueButton,
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
      {console.log(form)}
      <FormHeading>Log in to Legible</FormHeading>
      <Form>
        <InputWrapper>
          <InputContainer>
            <Input
              placeholder="Email"
              type="text"
              value={form.email}
              required
              name="email"
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
            <Label>Email</Label>
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              name="password"
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              required
              value={form.password}
            />
            <Label>Password</Label>

            {isVisible ? (
              <VisibilityOff onClick={handleVisibilityClick} />
            ) : (
              <Visibility onClick={handleVisibilityClick} />
            )}
          </InputContainer>
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
          <ContinueButton className="button">Log In</ContinueButton>
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
