import { createContext } from "react";


const LeadContext = createContext();

export  const LeadProvider = ({childre})=>{

return (
    <LeadContext.Provider>
        {children}
    </LeadContext.Provider>
)
}