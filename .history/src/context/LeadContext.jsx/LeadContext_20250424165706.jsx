
import { createContext } from "react";
import { axiosHandler } from "../../utils/axiosHandler";


const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
    const [data, setData] = useState([])

    const getLeadData = async () => {
        try
    }

    useEffect(() => {
        getLeadData()

    }, [])


    return (
        <LeadContext.Provider>
            {children}
        </LeadContext.Provider>
    )
}