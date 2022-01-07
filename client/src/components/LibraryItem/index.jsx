import React, { useState, useEffect } from 'react';

// API
import API from '../../API';

const LibraryItem = ({ id }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        let res = await API.getBook(id);
        setBook(res[0]);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return <div></div>;
};

export default LibraryItem;
