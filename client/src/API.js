import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const apiSettings = {
  checkUniqueUser: async (user) => {
    // Check if user is unique
    let res = await axios.post(`${BASE_URL}user/unique`, user);
    return res.data.isUnique;
  },

  createUser: async (user) => {
    let res = await axios.post(`${BASE_URL}auth/signup`, user);

    return res.data;
  },

  loginUser: async (user) => {
    let res = await axios.post(`${BASE_URL}auth/login`, user);

    return res.data;
  },

  addBook: async (book) => {
    let res = await axios.post(`${BASE_URL}book/create`, book);

    return res.data;
  },

  getBook: async (bookId) => {
    let res = await axios.get(`${BASE_URL}book/${bookId}`);

    return res.data;
  },

  getBooks: async (query) => {
    if (query) {
      let res = await axios.get(`${BASE_URL}book/?category=${query}`);

      return res.data;
    } else {
      let res = await axios.get(`${BASE_URL}book/`);

      return res.data;
    }
  },

  createPaymentIntent: async (body) => {
    let res = await axios.post(`${BASE_URL}stripe/create-payment-intent`, body);

    return res.data;
  },
};

export default apiSettings;
