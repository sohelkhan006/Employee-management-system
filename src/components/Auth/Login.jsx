import { useState } from "react";

const Login = ({handleUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleUser(email,password)
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 p-20 border-emerald-600 rounded-xl">
          <form
            onSubmit={submitHandler}
            className="flex flex-col items-center justify-center"
          >
            <input
              className="text-white text-xl outline-none border-2 border-emerald-600 rounded-full px-6 py-2 bg-transparent placeholder:text-gray-600 hover:placeholder:text-gray-400"
              type="email"
              placeholder="Enter your email"
              name=""
              id=""
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="mt-5 text-white text-xl outline-none border-2 border-emerald-600 rounded-full px-6 py-2 bg-transparent placeholder:text-gray-600 hover:placeholder:text-gray-400 "
              type="password"
              placeholder="Enter your password"
              name=""
              id=""
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="w-full bg-emerald-600 text-white text-xl outline-none border-none hover:bg-emerald-600 rounded-full px-8 py-2 mt-7 font-semibold placeholder:text-white">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
