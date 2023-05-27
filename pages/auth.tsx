import { useState } from "react";

const Auth = () => {
  const [isLogin, setLogin] = useState(true);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col w-96 h-96 bg-slate-900 px-3 items-center gap-5 justify-center rounded-lg">
        <h2 className="text-white font-semibold text-4xl">
          {isLogin ? "Login" : "Register"}
        </h2>
        {!isLogin && (
          <input
            type="text"
            placeholder="Username"
            className="p-2 w-3/4 outline-none rounded-md focus:ring-4"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="p-2 w-3/4 outline-none rounded-md  focus:ring-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 w-3/4 outline-none rounded-md focus:ring-4"
        />
        <button className="bg-slate-600 w-3/4 py-3 rounded-md text-white ">
          {isLogin ? "Login" : "Register"}
        </button>
        <p
          className="text-white cursor-pointer hover:underline"
          onClick={() => {
            isLogin ? setLogin(false) : setLogin(true);
          }}
        >
          {isLogin ? "Register here" : "Sign up Here"}
        </p>
      </div>
    </div>
  );
};

export default Auth;
