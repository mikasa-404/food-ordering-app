import { useState } from "react";
import { useEffect } from "react";
import { MENU_API } from "../utils/constants";
import { MENU_DATA } from "../mocks/MOCK_MENU_DATA";


const useRestaurant =(resId)=>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
      }, []);
    
   const fetchMenu = () => {
        const json = MENU_DATA.find(obj=> obj.id===resId)
        console.log(json)
        setResInfo(json.data);
      };

    return resInfo;

};
export default useRestaurant;
