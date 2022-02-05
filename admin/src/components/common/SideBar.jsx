import { Home, MenuBook, People, Receipt } from '@mui/icons-material';
import React from 'react';

const SideBar = () => {
  return (
    <nav className="sticky h-screen flex bg-neutral-100 w-16 flex-col">
      <div className="">
        <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-neutral-200 py-3">
          <Home />
          <p className="text-sm">Home</p>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-neutral-200 py-3">
          <People />
          <p className="text-sm">Users</p>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-neutral-200 py-3">
          <MenuBook />
          <p className="text-sm">Products</p>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-neutral-200 py-3">
          <Receipt />
          <p className="text-sm">Orders</p>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
