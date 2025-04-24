
import { createContext } from "react";
import { axiosHandler } from "../../utils/axiosHandler";


const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
    const [leadData, setLeadData] = useState([])

    const getLeadData = async () => {
        try {
            const res = await axiosHandler.get('/lead/get-leads');
            setLeadData(res.data);
            console.log(res)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getLeadData()

    }, [])


    return (
        <LeadContext.Provider value={{}}>
            {children}
        </LeadContext.Provider>
    )
}