// import { useState } from "react";

// const Section = (props) => {
//   return (
//     <div className="border border-black p-3 m-2">
//       <h3 className=" font-bold text-2xl">{props.title}</h3>
//       {props.isVisible ? (
//         <button
//           className=" cursor-pointer border bg-slate-700 text-red-100 p-1 rounded-lg"
//           onClick={() => props.setIsVisible()}
//         >
//           Hide
//         </button>
//       ) : (
//         <button
//           className=" cursor-pointer border bg-slate-700 text-red-100 p-1 rounded-lg"
//           onClick={() => props.setIsVisible()}
//         >
//           Show
//         </button>
//       )}
//       {props.isVisible && <p>{props.description}</p>}
//     </div>
//   );
// };
// const Instamart = () => {
//  const [visibleSection, setVisibleSection]=useState("about");

//   return (
//     <div>
//       <Section
//         title={"About us"}
//         description={
//           "This is description of about us section.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id"
//         }
//         isVisible= {visibleSection==="about"}
//         setIsVisible={() => setVisibleSection(visibleSection==="about"? "": "about")}
//       />
//       <Section
//         title={"Team instamart"}
//         description={
//           "This is description of our team.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id"
//         }
//         isVisible= {visibleSection==="team"}
//         setIsVisible={() => setVisibleSection(visibleSection==="team"? "": "team")}
//       />
//       <Section
//         title={"Contact instamart"}
//         description={
//           "This is description of our contact info.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id"
//         }
//         isVisible= {visibleSection==="contact"}
//         setIsVisible={() => setVisibleSection(visibleSection==="contact"? "" : "contact")}
//       />
//     </div>
//   );
// };
// export default Instamart;


import { useState , useEffect} from "react";
import React from "react";

export default Instamart=()=>{
  const [head, setHead]=useState("hello");
  const [text, setText]=useState("world");
  useEffect(()=>console.log(head+" "+text),[text]);
  // setText("hii");
  return(
    <div>
      {head}
      <button onClick={()=>setText("ruyeu")}>Click me</button>
    </div>
  )
}
