import React, { createContext, useContext, useEffect } from "react";
import { axiosHandler } from "../../utils/axiosHandler";

const contactContext = createContext()




const ContactContextProvider = ({ children }) => {
    
    const getContactdata = async () => {
        try {
            const res = await axiosHandler.get("/contact/lead-get")
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getContactdata()
    }, [])
    return (
        <contactContext.Provider>
            {children}
        </contactContext.Provider>
    )
}

export default ContactContextProvider;

export const useContactContext = () => useContext(contactContext);