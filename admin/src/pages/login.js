import { useRouter } from 'next/router';

import Logo from '../assets/NavLogo';

import { useState } from 'react';

// API
import API from '../api';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginFailure, loginSuccess } from '../redux/userSlice';

const initialForm = {
  email: '',
  password: '',
};

const Login = () => {
  const [form, setForm] = useState(initialForm);
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(loginStart());
      let res = await API.adminLogin(form);
      dispatch(loginSuccess(res.data));
      router.push('/');
    } catch (error) {
      dispatch(loginFailure());
      console.log(error);
    }
  };

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
              value={form.email}
              onChange={(e) => {
                setForm((prev) => {
                  return { ...prev, [e.target.name]: e.target.value };
                });
              }}
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
              onChange={(e) => {
                setForm((prev) => {
                  return { ...prev, [e.target.name]: e.target.value };
                });
              }}
            />
          </div>

          {!user.isFetching ? (
            <>
              <button
                onClick={handleSubmit}
                className="font-bold py-1 px-3 text-white bg-[#34515f] cursor-pointer hover:scale-105"
              >
                Login
              </button>
              <button className="font-bold py-1 px-3 text-white bg-[#34515f] cursor-pointer hover:scale-105">
                Demo Login
              </button>
            </>
          ) : (
            <div className="mx-auto">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#34515f"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="#34515f"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          )}
        </div>

        {user.error && (
          <div className="mt-5">
            <p className="text-red-700 font-semibold text-sm">
              Incorrect password or email, please try again.
            </p>
          </div>
        )}
      </form>
    </main>
  );
};

export default Login;
