import React from 'react';

// Router
import { useLocation, useParams } from 'react-router-dom';

const Libray = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const id = params.get('id');

  if (id) {
  }

  return <div></div>;
};

export default Libray;
