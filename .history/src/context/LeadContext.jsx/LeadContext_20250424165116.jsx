import axios from "axios";
import { createContext } from "react";
import { axiosHandler } from "../../utils/axiosHandler";


const LeadContext = createContext();

export  const LeadProvider = ({children})=>{
const [first, setfirst] = useState(second)

const getLeadData = async()=>{
    const res = await axiosHandler.get('/lead/create-leads');

}

return (
    <LeadContext.Provider>
        {children}
    </LeadContext.Provider>
)
}