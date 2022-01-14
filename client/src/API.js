import axios from 'axios';

// const BASE_URL = 'https://legible-server.herokuapp.com/api/';
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

  getWishList: async (list) => {
    let res = await axios.post(`${BASE_URL}book/wishlist`, list);

    return res.data;
  },

  getBook: async (bookId) => {
    let res = await axios.get(`${BASE_URL}book/${bookId}`);

    return res.data;
  },

  getBooks: async (query) => {
    if (query === 'free') {
      let res = await axios.get(`${BASE_URL}book/?free=true`);

      return res.data;
    }

    // query must be an array
    if (query) {
      let res = await axios.get(`${BASE_URL}book/?category=${query}`);

      return res.data;
    } else {
      let res = await axios.get(`${BASE_URL}book/`);

      return res.data;
    }
  },

  searchBooks: async (searchQuery) => {
    let res = await axios.get(`${BASE_URL}book/search?q=${searchQuery}`);

    return res.data;
  },

  createPaymentIntent: async (body) => {
    let res = await axios.post(`${BASE_URL}stripe/create-payment-intent`, body);

    return res.data;
  },

  updateUser: async (user, token) => {
    let res = await axios.post(`${BASE_URL}user/`, user, {
      headers: {
        token: `Bearer ${token}`,
      },
    });

    return res.data;
  },
};

export default apiSettings;
