import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  
  const [userdata, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <div>
      <authContext.Provider value={userdata}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
