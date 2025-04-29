import React, { createContext, useContext, useEffect,useState } from "react";
import { axiosHandler } from "../../utils/axiosHandler";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user,setUser] = useState(null);

  const LogedInUser = async () => {
    try {
      const res = await axiosHandler.get("/auth/logedin-user");
      setUser(res.data.data);
    } catch(error) {
      console.log(error)
    }
  }
  const LoginUser = async (data) => {
    try {
      const res = await axiosHandler.post("/auth/login", data);
      toast.success(res.data.message || "Login successful");
      LogedInUser();
      navigate("/dashboard")
    } catch (error) {
      console.log("Login Error:", error);
      toast.error(error?.response?.data?.message || "Login failed");
    }
  };



  useEffect(()=>{
    LogedInUser()
  },[])

  return (
    <authContext.Provider value={{ LoginUser,LogedInUser,user }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(authContext);
