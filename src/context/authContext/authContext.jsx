import React, { createContext, useContext } from "react";
import { axiosHandler } from "../../utils/axiosHandler";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
  const LoginUser = async (data) => {
    try {
      const res = await axiosHandler.post("/auth/login", data);
      toast.success(res.data.message || "Login successful");
      console.log(res);
      navigate("/dashboard") 
    } catch (error) {
      console.log("Login Error:", error);
      toast.error(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <authContext.Provider value={{ LoginUser }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(authContext);
