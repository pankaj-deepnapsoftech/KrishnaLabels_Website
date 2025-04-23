import React ,{ createContext, useContext } from "react";

const contactContext = createContext()




const ContactContextProvider = ({children})=>{
    const getContactdata = ()=>{
        
    }
return (
    <contactContext.Provider>
        {children}
    </contactContext.Provider>
)
}

export default ContactContextProvider ; 

export const useContactContext = ()=> useContext(contactContext);