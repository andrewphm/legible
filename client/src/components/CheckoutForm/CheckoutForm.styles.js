import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  min-width: 500px;
  align-self: center;
  box-shadow: rgb(80 110 122 / 20%) 2px 2px 1rem;
  padding: 40px;
  color: var(--secondary-color);

  .test {
    margin-top: 1rem;
    border: 1px solid lightgrey;
    padding: 0.8rem;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    min-width: initial;
  }
`;

export const Spinner = styled.div`
  color: #ffffff;
  font-size: 22px;
  text-indent: -99999px;
  margin: 0px auto;
  position: relative;
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 0 2px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  border-radius: 50%;

  :before {
    border-radius: 50%;
    position: absolute;
    content: '';
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }

  :after {
    border-radius: 50%;
    position: absolute;
    content: '';
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Button = styled.button`
  background: var(--primary-color);
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 100%;
  margin-top: 1rem;

  span {
    color: #fff;
  }

  :hover {
    filter: contrast(115%);
  }

  :disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const PaymentMessage = styled.div`
  color: var(--secondary-color);
  font-size: 16px;
  line-height: 20px;
  padding-top: 12px;
  text-align: center;
`;
