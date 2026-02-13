import React, { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = ({ data }) => {
  // const [username, setUserName] = useState('')
  // if (!data) {
  //   setUserName('admin')
  // }else{
  //   setUserName(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-medium  text-white">
        hello <br />
        <span className="text-3xl font-semibold text-white">{data?.firstName || "Admin"}👋</span>
      </h1>
      <button
        className="bg-red-600 text-white px-6 py-2 rounded-sm text-xl font-medium"
        onClick={logOutUser}
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
