import React from 'react';

// Router
import { useLocation } from 'react-router-dom';

const Libray = () => {
  var location = useLocation();
  console.log(location.search.split('redirect_status='));
  return <div></div>;
};

export default Libray;
