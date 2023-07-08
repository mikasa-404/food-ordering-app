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
    <div>
      <div className="bg-fixed flex justify-between bg-black shadow-xl">
    <Title/>
      <div className="nav-items py-2">
        <ul className="flex p-6 text-white space-x-5">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>
          <Link to="/cart">
            Cart- {cartItems.length}
            {console.log(cartItems)}
            </Link>
          </li>

          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
    </div>
    </div>
    <div className="search"></div>
    </div>
    
  );
};
export default Header;
