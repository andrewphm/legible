import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  width: 100%;
  max-width: 500px;
  height: 100%;
  padding: 45px 12px;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  min-height: 500px;

  .info {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .select-country {
    width: 200px;
    cursor: pointer;
    border-radius: 0;
    margin: 1rem auto;
  }

  .country-info {
    text-align: center;
  }
`;

export const FormHeading = styled.h2`
  margin: 1rem auto;
  font-size: 1.6rem;
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
  border-radius: 0.2rem;

  .requirement {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: -10px;
  background-color: white;
  left: 10px;
  font-weight: 600;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid rgb(121, 146, 154);
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  width: calc(100% + 10px);

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

export const Input = styled.input`
  font-size: 1rem;
  line-height: 1.35;
  transition: (--transition);
  background-color: #fff;
  color: rgb(43, 50, 56);
  display: flex;
  width: 100%;
  padding: 0.8rem;

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
