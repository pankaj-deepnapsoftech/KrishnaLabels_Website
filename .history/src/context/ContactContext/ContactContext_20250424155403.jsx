import React, { createContext, useContext, useEffect } from "react";
import { axiosHandler } from "../../utils/axiosHandler";
import { useState } from "react";

const contactContext = createContext()




const ContactContextProvider = ({ children }) => {
    const [data, setdate] = useState([])
    const getContactdata = async () => {
        try {
            const res = await axiosHandler.get("/contact/lead-get")
           setdate(res.data);
           console.log();
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getContactdata()
    }, [])
    return (
        <contactContext.Provider value={{data}}>
            {children}
        </contactContext.Provider>
    )
}

export default ContactContextProvider;

export const useContactContext = () => useContext(contactContext);