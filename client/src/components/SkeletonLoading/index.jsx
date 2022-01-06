import React from 'react';

// Styled components
import { Container } from './SkeletonLoading.styles';

const SkeletonLoading = () => {
  return (
    <Container>
      <div className="image"></div>
      <div className="title"></div>
      <div className="author"></div>
      <div className="price"></div>
    </Container>
  );
};

export default SkeletonLoading;
