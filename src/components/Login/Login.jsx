import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="w-full lg:w-96 mx-auto shadow-2xl my-5 border border-purple-700 rounded-lg">
      <h2 className="text-3xl font-bold text-center mt-8 mb-4 text-gradiant ">
        Login
      </h2>

      <div className="p-5 flex flex-col gap-5">
        <form action="" className="flex flex-col gap-5">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              User Email
            </span>
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Password
            </span>
            <div className="relative">
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="password"
                required
              />
              <button
                onClick={togglePassword}
                className="absolute top-2 right-2"
              >
                <EyeSlashIcon className="w-6 h-6"></EyeSlashIcon>
              </button>
            </div>
          </label>
          <p className="text-red-500"></p>
          <p className="text-green-700"></p>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-800 w-2/4 mx-auto px-7 py-3 text-white font-bold rounded-md  "
          >
            Login
          </button>
        </form>
        <p className="text-right text-slate-600 font-bold hover:text-purple-700">
          Forgot password ?
        </p>

        <div className="flex flex-col gap-5 justify-center items-center">
          <p>Or Sign Up Using</p>
          <span className=" flex gap-4">
            <button>
              <img className="w-8" src="/social/twitter.svg" alt="" />
            </button>
            <button>
              <img className="w-8" src="/social/google.svg" alt="" />
            </button>
            <button>
              <img className="w-8" src="/social/github.svg" alt="" />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
