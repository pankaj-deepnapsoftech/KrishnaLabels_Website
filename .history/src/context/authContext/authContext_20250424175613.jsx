import React from "react";
import { createContext, useContext } from "react";
import { axiosHandler } from "../../utils/axiosHandler";

const authContext = createContext();

const AuthContextProvider = ({children}) => {

    const LoginUser = async (data) => {
        try {
            const res = await axiosHandler.post("/auth/login",data)
            console.log(res.data)
            tost
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <authContext.Provider value={{LoginUser}} >
            {children}
        </authContext.Provider>
    )
}

export default AuthContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(authContext)










