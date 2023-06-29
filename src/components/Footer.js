import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer=()=>{
    const {user}= useContext(userContext);
    return(
        <div className="p-5 bg-black text-yellow-100">
            <h4>This site is developed by {user.name}- {user.email}</h4>
        </div>

    );
};

export default Footer;