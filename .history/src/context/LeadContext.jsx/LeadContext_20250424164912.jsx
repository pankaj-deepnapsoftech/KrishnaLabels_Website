import { createContext } from "react";


const LeadContext = createContext();

export  const LeadProvider = ({children})=>{

const 

return (
    <LeadContext.Provider>
        {children}
    </LeadContext.Provider>
)
}