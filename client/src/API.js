import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const apiSettings = {
  checkUniqueUser: async (user) => {
    // Check if user is unique
    let res = await axios.post(`${BASE_URL}user/unique`, user);
    return res.data.isUnique;
  },
};

export default apiSettings;