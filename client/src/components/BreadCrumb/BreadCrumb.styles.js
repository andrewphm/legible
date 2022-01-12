import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 0;
`;

export const BreadCrumbList = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 1rem;
`;

export const ListItem = styled.li`
  position: relative;
  text-transform: capitalize;
  font-size: 0.9rem;

  :last-child {
    font-weight: 600;
    color: rgb(108, 120, 127);
  }

  :not(:last-child) {
    :hover p {
      text-decoration: underline;
    }

    p {
      font-weight: 500;
      color: rgb(108, 120, 127);
    }

    :after {
      content: '/';
      position: absolute;
      top: 0;
      right: -10px;
    }
  }

  @media only screen and (min-width: 500px) {
    font-size: 1rem;
  }
`;
