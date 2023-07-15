import placed from "../../imgs/img.gif"
import { Link } from "react-router-dom";

const OrderPlaced=()=>{
    return(
        <div className="flex items-center flex-col">
            <img className="w-2/5"src={placed}></img>
            <p className=" font-serif font-bold">Thank You!</p>
            <p className="font-serif font-semibold">Order succesfully placed</p>
            <button className="bg-blue-800 hover:bg-blue-500 active:bg-blue-950 text-white p-2 m-7 text-sm font-bold rounded-md">
        <Link to="/"> Click here to go back to Restaurants </Link>
      </button>
        </div>
    );
}
export default OrderPlaced;