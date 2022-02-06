import { useState, useEffect } from 'react';

import API from '../../api';

const UserWidget = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.getUsers(true);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="">
      <h1>New Users</h1>
      <div className="w-full"></div>
    </div>
  );
};

export default UserWidget;
