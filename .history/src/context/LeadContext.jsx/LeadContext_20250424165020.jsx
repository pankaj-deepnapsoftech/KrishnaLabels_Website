import axios from "axios";
import { createContext } from "react";


const LeadContext = createContext();

export  const LeadProvider = ({children})=>{

const getLeadData = async()=>{
    const res = await axios.AxiosHeaders
}

return (
    <LeadContext.Provider>
        {children}
    </LeadContext.Provider>
)
}