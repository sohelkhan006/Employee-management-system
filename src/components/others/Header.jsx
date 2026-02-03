import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-medium  text-white">
        hello <br />
        <span className="text-3xl font-semibold text-white">Sohel 👋</span>
      </h1>
      <button
        className="bg-red-600 text-white px-6 py-2 rounded-sm text-xl font-medium"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
