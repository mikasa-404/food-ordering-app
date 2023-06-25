import { useState } from "react";
import Mylogo from "../../imgs/FOODYVILLE2.png";
import { Link } from "react-router-dom";

const Title=()=>(
  <a href="/">
    <img  className=" h-20 px-2  m-3" src={Mylogo} alt="" />
    </a>
);
  


// const styles = {
//   color: "red",
//   background: "#0f0",
//   fontSize: "32px"
// };
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div>
      <div className="bg-fixed flex justify-between bg-black shadow-md">
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
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            Cart
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
