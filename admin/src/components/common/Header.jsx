import { AccountCircle, Menu, Settings } from '@mui/icons-material';
import NavLogo from '../../assets/NavLogo';

const Header = () => {
  return (
    <header className="sticky w-screen h-16">
      <div className="container w-full px-4 py-2 flex justify-between text-slate-700">
        <div className="flex items-center space-x-4">
          <div className=" hover:bg-slate-200 rounded-full px-2 py-1">
            <Menu className="text-2xl cursor-pointer hover:scale-105 transform duration-150 ease-in-out" />
          </div>
          <NavLogo />
        </div>

        <div className="flex items-center space-x-1">
          <h2>ADMIN </h2>

          <div className=" hover:bg-slate-200 rounded-full px-2 py-1">
            <Settings className="cursor-pointer"></Settings>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
