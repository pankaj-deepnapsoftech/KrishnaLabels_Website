import React ,{ createContext, useContext } from "react";

const contactContext = createContext()




const ContactContextProvider = ({children})=>{
    const getContactdata = ()=>{
        try
    }
return (
    <contactContext.Provider>
        {children}
    </contactContext.Provider>
)
}

export default ContactContextProvider ; 

export const useContactContext = ()=> useContext(contactContext);