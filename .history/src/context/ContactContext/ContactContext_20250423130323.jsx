import { createContext } from "react";

const contactContext = createContext()




const ContactCOntextProvider = ({children})=>{
return (
    <contactContext.Provider>
        {children}
    </contactContext.Provider>
)
}

export 