import axios from "axios";

import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

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

      toast.success("Giriş başarılı");
    } catch (error) {
      toast.error("Birşeyler yanlış gitti");
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        username,
        password,
      });
      toast.success("Kayıt başarılı");
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, username, password, login]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col w-96 h-96 bg-blue-950 px-3 py-4 items-center gap-5 justify-center rounded-lg">
        <h2 className="text-white font-semibold text-4xl">
          {isLogin ? "Login" : "Register"}
        </h2>
        {!isLogin && (
          <input
            type="text"
            placeholder="Username"
            className="text-white font-semibold p-2 w-3/4 outline-none border-gray-600 border-2 rounded-md focus:ring-4 bg-blue-950"
            onChange={(ev: any) => {
              setUsername(ev.target.value);
            }}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="text-white font-semibold p-2 w-3/4 outline-none rounded-md focus:ring-4 border-gray-600 border-2 bg-blue-950"
          onChange={(ev: any) => {
            setEmail(ev.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="text-white font-semibold p-2 w-3/4 outline-none rounded-md focus:ring-4 border-gray-600 border-2 bg-blue-950"
          onChange={(ev: any) => {
            setPassword(ev.target.value);
          }}
        />
        <button
          className="bg-slate-600 w-3/4 py-3 rounded-md text-white hover:bg-slate-500 transition"
          onClick={isLogin ? login : register}
        >
          <p className="text-white  font-bold">
            {isLogin ? "Login" : "Register"}
          </p>
        </button>
        <p
          className="text-white font-semibold cursor-pointer hover:underline"
          onClick={() => {
            isLogin ? setLogin(false) : setLogin(true);
          }}
        >
          {isLogin ? "Register here" : "Sign in Here"}
        </p>
      </div>
    </div>
  );
};

export default Auth;
