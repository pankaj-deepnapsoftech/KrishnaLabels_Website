import { createContext } from "react";


const LeadContext = createContext();

export  const LeadProvider = ({chu})=>{

return (
    <LeadContext.Provider>
        {children}
    </LeadContext.Provider>
)
}