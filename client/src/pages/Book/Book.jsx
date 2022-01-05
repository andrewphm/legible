import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../API';
const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState('');

  // Get book
  useEffect(() => {
    try {
      let res = API.getBook;
    } catch (error) {}
  }, []);

  return <div></div>;
};

export default Book;
