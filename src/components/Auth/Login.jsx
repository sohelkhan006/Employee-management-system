import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
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
              className="text-black text-xl outline-none border-2 border-b-emerald-600 rounded-full px-5 py-3 bg-transparent placeholder:text-gray-600"
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
              className="mt-3 text-black text-xl outline-none border-2 border-b-emerald-600 rounded-full px-5 py-3 bg-transparent placeholder:text-gray-600 "
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
            <button className="text-black text-xl outline-none border-none bg-emerald-600 rounded-full px-5 py-3 m-4 placeholder:text-gray-600">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
