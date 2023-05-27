import axios from "axios";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";

const Auth = () => {
  const [isLogin, setLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        username,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, username, password, login]);

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
            onChange={(ev: any) => {
              setUsername(ev.target.value);
            }}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="p-2 w-3/4 outline-none rounded-md  focus:ring-4"
          onChange={(ev: any) => {
            setEmail(ev.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 w-3/4 outline-none rounded-md focus:ring-4"
          onChange={(ev: any) => {
            setPassword(ev.target.value);
          }}
        />
        <button
          className="bg-slate-600 w-3/4 py-3 rounded-md text-white hover:bg-slate-500 transition"
          onClick={isLogin ? login : register}
        >
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
