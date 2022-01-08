import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  min-height: 500px;
`;

export const Heading = styled.h1`
  font-size: 1.7rem;
  padding: 2rem 1rem;
`;

export const TabsWrapper = styled.div`
  width: 100%;
  overflow: scroll;
  height: 4rem;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabsContainer = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid rgb(64, 128, 107);
  min-width: 420px;
`;

export const Tabs = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  min-width: 400px;
  margin-left: 1rem;
  column-gap: 2rem;

  .focused {
    border-bottom: 8px solid rgb(64, 128, 107);
    p {
      opacity: 1;
    }
  }
`;

export const TabItem = styled.li`
  position: relative;
  padding: 10px 0;
  font-size: 1rem;
  top: 4px;
  z-index: 2;
  cursor: pointer;

  p {
    opacity: 0.85;
    color: rgb(108, 120, 127);
    letter-spacing: 0.05em;
    font-weight: 600;
    white-space: nowrap;
  }

  :hover p {
    opacity: 1;
  }
`;

export const Section = styled.section`
  padding: 2rem 1rem;
`;
