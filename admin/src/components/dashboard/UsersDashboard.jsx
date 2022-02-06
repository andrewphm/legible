import { Delete } from '@mui/icons-material';

import { useState, useEffect } from 'react';

import API from '../../api';

const UsersDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.getUsers();

        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-full h-full p-4">
      <h1 className="text-primary">Users Panel</h1>

      <div>
        <div className="grid grid-cols-[1fr_5fr_5fr_4fr_4fr] border">
          <div className="flex justify-center items-center">
            <input type="checkbox" name="" id="" />
          </div>

          <div className="border-l pl-3 my-2 flex items-center">
            <p className="text-sm font-medium ">ID</p>
          </div>

          <div className="border-l pl-3 my-2 flex items-center">
            <p className="text-sm font-medium ">Email</p>
          </div>

          <div className="border-l pl-3 my-2 flex items-center">
            <p className="text-sm font-medium ">Username</p>
          </div>

          <div className="border-l pl-3 my-2 flex items-center">
            <p className="text-sm font-medium ">Action</p>
          </div>
        </div>

        {users?.map(({ _id, email, username }, i) => {
          return (
            <div
              key={i}
              className="grid grid-cols-[1fr_5fr_5fr_4fr_4fr] border border-t-0"
            >
              <div className="flex justify-center items-center">
                <input type="checkbox" name="" id="" />
              </div>

              <div className="pl-3 my-2 flex items-center w-full overflow-hidden">
                <p className="text-sm font-normal text-primary truncate">
                  {_id}
                </p>
              </div>

              <div className="pl-3 my-2 flex items-center w-full overflow-hidden">
                <p className="text-sm text-primary truncate">{email}</p>
              </div>

              <div className="pl-3 my-2 flex items-center w-full overflow-hidden">
                <p className="text-sm font-normal text-primary truncate">
                  {username}
                </p>
              </div>

              <div className="pl-3 my-2 flex items-center">
                <div className="flex items-center gap-x-1">
                  <button className="text-white text-xs bg-green-500 py-1 px-2 rounded-full shadow-sm hover:scale-105">
                    Edit
                  </button>

                  <Delete className="text-red-500 cursor-pointer hover:scale-105" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersDashboard;
