import { useState } from "react";
import Mylogo from "../../imgs/FOODYVILLE2.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Title=()=>(
  <a href="/">
    <img  className=" h-20 px-2  m-3" src={Mylogo} alt="" />
    </a>
);
  
const Header = () => {
  const cartItems= useSelector(store => store.cart.items);
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className=" font-medium">
      <div className="bg-fixed flex items-center justify-between bg-black shadow-xl">
    <Title/>
      <div className="nav-items py-5">
        <ul className="flex text-white space-x-6 mx-5">
          <li className="m-x-2">
            <Link className="focus:text-red-500 " to="/">Home</Link>
          </li>
          <li className="m-x-2">
            <Link className="focus:text-red-500" to="/about">About</Link>
          </li>
          <li>
            <Link className="focus:text-red-500" to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="focus:text-red-500" to="/help">Help</Link>
          </li>
          <li>
          <Link className="focus:text-red-500" to="/cart">
            Cart- {cartItems.length}
            {console.log(cartItems)}
            </Link>
          </li>
          <li>
          <button
            className="login focus:text-red-500"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          </li>
          
        </ul>
    </div>
    </div>
    <div className="search"></div>
    </div>
    
  );
};
export default Header;
