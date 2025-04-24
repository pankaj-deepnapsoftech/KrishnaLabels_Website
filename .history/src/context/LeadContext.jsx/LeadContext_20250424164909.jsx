import { createContext } from "react";


const LeadContext = createContext();

export  const LeadProvider = ({children})=>{


    
return (
    <LeadContext.Provider>
        {children}
    </LeadContext.Provider>
)
}