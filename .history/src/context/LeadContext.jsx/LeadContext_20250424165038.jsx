import axios from "axios";
import { createContext } from "react";
import { axiosHandler } from "../../utils/axiosHandler";


const LeadContext = createContext();

export  const LeadProvider = ({children})=>{

const getLeadData = async()=>{
    const res = await axiosHandler.get('')
}

return (
    <LeadContext.Provider>
        {children}
    </LeadContext.Provider>
)
}