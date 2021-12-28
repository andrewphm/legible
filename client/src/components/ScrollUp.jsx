import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

const ScrollUp = () => {
  let path = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [path]);

  return null;
};

export default ScrollUp;
