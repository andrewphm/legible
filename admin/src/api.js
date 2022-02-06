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
};

export default ApiSettings;
