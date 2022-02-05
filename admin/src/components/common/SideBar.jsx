import { Home, MenuBook, People, Receipt } from '@mui/icons-material';
import { useEffect } from 'react';

import { useRef } from 'react';

const SideBar = ({ setCurrentMenu }) => {
  const currentMenu = useRef(null);

  const handleMenuChange = (e) => {
    if (!e.currentTarget.classList.contains('bg-neutral-200')) {
      currentMenu.current.classList.remove('bg-neutral-200');
      e.currentTarget.classList.add('bg-neutral-200');
      currentMenu.current = e.currentTarget;
      setCurrentMenu(currentMenu.current.lastChild.innerText.toLowerCase());
    }
  };

  return (
    <nav className="sticky h-screen flex bg-neutral-100 w-16 flex-col mr-0">
      <div className="">
        <div
          onClick={handleMenuChange}
          ref={currentMenu}
          className="flex flex-col justify-center items-center cursor-pointer hover:bg-neutral-200 bg-neutral-200 py-3"
        >
          <Home className="" />
          <p className="text-sm">Home</p>
        </div>
        <div
          onClick={handleMenuChange}
          className="flex flex-col justify-center items-center cursor-pointer hover:bg-neutral-200 py-3"
        >
          <People />
          <p className="text-sm">Users</p>
        </div>
        <div
          onClick={handleMenuChange}
          className="flex flex-col justify-center items-center cursor-pointer hover:bg-neutral-200 py-3"
        >
          <MenuBook />
          <p className="text-sm">Products</p>
        </div>
        <div
          onClick={handleMenuChange}
          className="flex flex-col justify-center items-center cursor-pointer hover:bg-neutral-200 py-3"
        >
          <Receipt />
          <p className="text-sm">Orders</p>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
