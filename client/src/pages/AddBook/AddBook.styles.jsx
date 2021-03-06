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

  #submit {
    margin-top: 1rem;
    background-color: transparent;
    padding: 5px 8px;
    border: 1px solid var(--primary-color);
    border-radius: 15px;
    width: 120px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
      color: white;
      background-color: var(--primary-color);
    }
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  width: 100%;
  border-radius: 0.2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  h3 {
    width: 100%;
  }

  button {
    background-color: transparent;
    font-weight: 600;
    cursor: pointer;

    :hover {
      transform: scale(1.05);
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  top: -10px;
  background-color: white;
  left: 10px;
  font-weight: 600;
  font-size: 0.8rem;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid rgb(121, 146, 154);
  display: flex;
  align-items: center;
  padding-right: 10px;
  min-width: 220px;
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
  font-size: 0.8rem;
  line-height: 1.35;
  transition: (--transition);
  background-color: #fff;
  color: black;
  display: flex;
  width: 100%;
  padding: 0.5rem;

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

export const ReviewContainer = styled.ol`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const ReviewItem = styled.li`
  display: flex;
  column-gap: 1rem;
  border: 1px solid lightgrey;
  padding: 5px 8px;
  font-size: 0.8rem;

  p {
    width: 120px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .desc {
    width: 250px;
  }

  :hover .desc {
    text-overflow: initial;
    overflow: initial;
    white-space: initial;
  }

  button {
    background-color: transparent;
    font-weight: 600;
    cursor: pointer;
    height: fit-content;

    :hover {
      transform: scale(1.1);
    }
  }
`;

export const Success = styled.div`
  margin-top: 1rem;
  display: none;
  p {
    color: green;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const Failure = styled.div`
  margin-top: 1rem;
  display: none;

  p {
    color: red;
    font-size: 1rem;
    font-weight: 500;
  }
`;
