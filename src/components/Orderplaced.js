import placed from "../../imgs/img.gif"
import { Link } from "react-router-dom";

const OrderPlaced=()=>{
    return(
        <div className="flex items-center flex-col">
            <img className="w-2/5"src={placed}></img>
            <p>Thank You!</p>
            <p>Order succesfully placed</p>
            <button className="bg-blue-600 text-white p-2 m-7 text-sm font-bold rounded-md">
        <Link to="/"> Click here to go back to Restaurants </Link>
      </button>
        </div>
    );
}
export default OrderPlaced;