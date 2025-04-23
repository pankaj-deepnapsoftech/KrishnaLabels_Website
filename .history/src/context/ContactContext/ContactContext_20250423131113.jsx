import React ,{ createContext, useContext } from "react";
import { axiosHandler } from "../../utils/axiosHandler";

const contactContext = createContext()




const ContactContextProvider = ({children})=>{
    const getContactdata = async()=>{
        try {
            const res = await axiosHandler
        } catch (error) {
            console.log(error);
        }
    }
return (
    <contactContext.Provider>
        {children}
    </contactContext.Provider>
)
}

export default ContactContextProvider ; 

export const useContactContext = ()=> useContext(contactContext);