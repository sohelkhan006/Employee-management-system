import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { authContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage()
  // });

  const handleUser = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      console.log(user);
    } else if (email === "user@me.com" && password === "123") {
      setUser("employee");
      console.log(user);
    } else {
      alert("Invalid credential");
    }
  };

  const data = useContext(authContext);
  console.log(data)

  return (
    <>
      {!user && <Login handleUser={handleUser} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard />}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
