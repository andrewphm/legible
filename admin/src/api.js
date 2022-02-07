import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

const ApiSettings = {
  adminLogin: async (body) => {
    const res = await axios.post(`${BASE_URL}/auth/login`, body);

    return res;
  },
  getUsers: async (latest) => {
    if (latest) {
      const res = await axios.get(`${BASE_URL}/user/?new=${latest}`);
      return res;
    } else {
      const res = await axios.get(`${BASE_URL}/user/`);
      return res;
    }
  },
  getUser: async (id) => {
    const res = await axios.get(`${BASE_URL}/user/${id}`);

    return res;
  },
  getBook: async (id) => {
    const res = await axios.get(`${BASE_URL}/book/${id}`);

    return res;
  },

  getBooks: async () => {
    const res = await axios.get(`${BASE_URL}/book`);

    return res;
  },
  getOrders: async (latest) => {
    if (latest) {
      const res = await axios.get(`${BASE_URL}/order/?new=${latest}`);
      return res;
    } else {
      const res = await axios.get(`${BASE_URL}/order/`);
      return res;
    }
  },
  getMonthlyRevenue: async () => {
    const res = await axios.get(`${BASE_URL}/order/stats`);

    return res;
  },
  getUserStats: async () => {
    const res = await axios.get(`${BASE_URL}/user/stats`);

    return res;
  },
};

export default ApiSettings;
