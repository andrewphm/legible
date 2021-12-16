import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 70vh;
  padding: 45px 12px;
  flex-direction: column;
  align-items: center;
`;

export const StepHeading = styled.h1`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  width: 100%;
  font-family: var(--primary-font);
  color: rgb(95, 108, 116);
`;

export const FormHeading = styled.h2`
  margin: 1rem auto;
  font-size: 1.8rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  width: 100%;
  cursor: pointer;
`;

export const Label = styled.label`
  position: absolute;
  top: -10px;
  background-color: white;
  left: 10px;
  font-weight: 600;
  color: rgb(95, 108, 116);
`;
export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgb(121, 146, 154);
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

export const Input = styled.input`
  font-size: 1rem;
  line-height: 1.35;
  transition: (--transition);
  background-color: #fff;
  color: rgb(43, 50, 56);
  display: flex;
  width: 100%;
  padding: 0.8rem;
  cursor: pointer;

  :-webkit-autofill,
  :-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  [data-autocompleted] {
    background-color: transparent !important;
  }

  :focus {
    outline: none !important;
  }
`;
