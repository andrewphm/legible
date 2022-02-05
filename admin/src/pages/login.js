import Logo from '../assets/NavLogo';

import { useState } from 'react';

const initialForm = {
  email: '',
  password: '',
};

const Login = () => {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = () => {};

  return (
    <main className="w-screen h-screen flex text-[#34515f]">
      <form className="m-auto border shadow-lg p-10 min-w-[300px] md:min-w-[400px]">
        <div className="flex-col flex justify-center items-center">
          <Logo />
          <h1 className="text-2xl text-[#34515f] font-semibold">Dashboard</h1>
        </div>

        <div className="mt-4 flex flex-col gap-y-5 w-full max-w-[330px] m-auto">
          <div className="relative border py-3 px-2 w-full">
            <div className="absolute -top-[14px] bg-white left-2">
              <label className="text-sm font-semibold" htmlFor="email">
                Email
              </label>
            </div>
            <input
              className="outline-none w-full"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              valeu={form.email}
            />
          </div>

          <div className="relative border py-3 px-2 w-full">
            <div className="absolute -top-[14px] bg-white left-2">
              <label className="text-sm font-semibold" htmlFor="email">
                Email
              </label>
            </div>
            <input
              className="outline-none w-full"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
              value={form.password}
            />
          </div>
          <button className="font-bold py-1 px-3 text-white bg-[#34515f] cursor-pointer hover:scale-105">
            Login
          </button>
          <button className="font-bold py-1 px-3 text-white bg-[#34515f] cursor-pointer hover:scale-105">
            Demo Login
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
