import { createContext, useContext } from "react";
im
const contactContext = createContext()




const ContactContextProvider = ({children})=>{
return (
    <contactContext.Provider>
        {children}
    </contactContext.Provider>
)
}

export default ContactContextProvider ; 

export const useContactContext = ()=> useContext(contactContext);