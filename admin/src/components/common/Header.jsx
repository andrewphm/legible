import { Logout, Menu, Settings } from '@mui/icons-material';
import NavLogo from '../../assets/NavLogo';

import { useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';

const Header = () => {
  const menuRef = useRef(null);
  const dispatch = useDispatch();

  const handleSettingClick = () => {
    menuRef.current.classList.toggle('-right-40');
    menuRef.current.classList.toggle('right-6');
  };

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <header className="sticky w-screen h-16 bg-neutral-100">
      <div className="px-4 py-2 flex justify-between h-full w-full relative text-slate-700">
        <div className="flex items-center space-x-4">
          <div className=" hover:bg-slate-200 rounded-full px-2 py-1">
            <Menu className="text-2xl cursor-pointer hover:scale-105 transform duration-150 ease-in-out" />
          </div>
          <NavLogo />
        </div>

        <div className="flex items-center space-x-1">
          <h2>ADMIN </h2>

          <div
            onClick={handleSettingClick}
            className="hover:bg-slate-200 rounded-full px-2 py-1"
          >
            <Settings className="cursor-pointer"></Settings>
          </div>
        </div>

        <div
          className="border absolute w-28 shadow-lg rounded-lg py-2 transform -right-40 top-16 flex duration-1000"
          ref={menuRef}
        >
          <div
            onClick={handleLogOut}
            className="flex text-black gap-x-1 mx-auto cursor-pointer"
          >
            <p>Log out</p>
            <Logout />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
