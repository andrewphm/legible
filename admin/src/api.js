import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

const ApiSettings = {
  adminLogin: async (body) => {
    const res = await axios.post(`${BASE_URL}/auth/login`, body);

    return res;
  },
};

export default ApiSettings;
