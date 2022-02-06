import { useState, useEffect } from 'react';

// Icons
import { AccountCircle, Visibility } from '@mui/icons-material';

import API from '../../api';

const UserWidget = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.getUsers(true);

        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-neutral-50 shadow-lg p-4 w-fit">
      <h1 className="font-semibold text-lg mb-3">Latest New Users</h1>
      <div className="w-full flex flex-col gap-y-3">
        {users?.map(({ email, username }, i) => {
          return (
            <div key={i} className="w-full flex items-center gap-3">
              <div className="text-[#34515f]">
                <AccountCircle className="text-4xl" />
              </div>

              <div className="flex flex-col w-[200px]">
                <p className="text-sm font-semibold">{username}</p>
                <p className="text-gray-500 text-sm">{email}</p>
              </div>

              <div className="flex text-sm items-center text-[#34515f] gap-x-1 py-1 px-2 bg-neutral-100 rounded-xl cursor-pointer hover:bg-neutral-200">
                <Visibility />
                <p>Display</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserWidget;
