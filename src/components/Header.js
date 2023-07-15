import { useState } from "react";
import Mylogo from "../../imgs/logo.png";
import { Link } from "react-router-dom";
// import { useContext } from "react";
import { useSelector } from "react-redux";
// import store from "../utils/store";
import { useLocation } from 'react-router-dom'


const Title=()=>(
  <a href="/">
  <div className="text-white flex items-center mx-4">
    <img data-testid="logo" className=" h-10" src={Mylogo} alt="" />
    <h1 className="font-serif font-bold text-2xl m-0 mx-1">Foodyville</h1>
  </div>
  </a>

);
  
const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  
  const cartItems= useSelector(store => store.cart.items);
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className=" font-medium">
      <div className="bg-fixed flex items-center justify-between bg-black shadow-xl">
    <Title/>
      <div className="nav-items py-5 ">
        <ul className="flex text-white space-x-1 mx-4">
          <li className={`p-2 px-4 rounded-2xl hover:bg-slate-800 ${location.pathname == "/" ? "bg-slate-800" : ""}`}>
            <a  href="/">Home</a>
          </li>
          <li className={`p-2 px-4 rounded-2xl hover:bg-slate-800 ${location.pathname == "/about" ? "bg-slate-800" : ""}`}>
            <Link className=" " to="/about">About</Link>
          </li>
          <li className={`p-2 px-4 rounded-2xl hover:bg-slate-800 ${location.pathname == "/help" ? "bg-slate-800" : ""}`}>
            <Link className="" to="/help">Help</Link>
          </li>
          <li className={`p-2 px-4 rounded-2xl hover:bg-slate-800 ${location.pathname == "/cart" ? "bg-slate-800" : ""}`}>
          <Link data-testid="cart" className="" to="/cart">
            Cart-{cartItems.length}
            {console.log(cartItems)}
            </Link>
          </li>
          <li className={`p-2 px-4 rounded-2xl hover:bg-slate-800`}>
          <button
            className="login"
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
    </div>
    
  );
};
export default Header;
