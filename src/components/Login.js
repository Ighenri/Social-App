import React from "react";

export default function Login() {
  return (
    <div className="login w-screen h-screen bg-white flex items-center justify-center">
      <div className="loginwrapper w-[70%] h-[70%] flex">
        <div className="loginLeft flex flex-col flex-grow justify-center">
          <h3 className="loginLogo text-5xl font-bold text-blue-400 mb-4 ">
            HenrySocial
          </h3>
          <span className="loginDesc text-2xl">
            Connect with friends and the world around you on HenrySocial
          </span>
        </div>
        <div className="loginRight flex flex-col flex-grow justify-center">
          <div className="loginBox h-[300px] p-5 bg-gray-300 rounded-xl flex flex-col justify-between">
            <input
              className="loginInput h-12 rounded-xl border border-gray-400 text-2xl pl-5 outline-none"
              placeholder="Email"
              name=""
              id=""
            />
            <input
              className="loginInput h-12 rounded-xl border border-gray-400 text-2xl pl-5 outline-none"
              placeholder="Password"
              name=""
              id=""
            />
            <button className="loginButton h-12 rounded-xl bg-blue-500 text-white font-bold cursor-pointer text-lg">
              Log In
            </button>
            <span className="koginForgot text-center text-blue-500">
              Forgot Password?
            </span>
            <button className="loginRegisterButton w-2/3 h-12 rounded-xl bg-green-500 text-white font-bold cursor-pointer text-base self-center">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
