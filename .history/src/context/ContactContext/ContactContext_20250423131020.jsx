import React ,{ createContext, useContext } from "react";

const contactContext = createContext()




const ContactContextProvider = ({children})=>{
    const getContactdata = ()=>{
        try {
            
        } catch (error) {
            console.log(e);
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