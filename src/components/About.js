import React from "react";
import UserClass from "./UserClass"

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log(this);
    }
    render(){
        return(
            
            <div>
            <h1>About us page</h1>
            <h2>This website is created by {this.props.name}</h2>
            <UserClass />
            </div>
        );
    }
}


// const About = ()=>{ 
// return (
//     <div>
//         <h1>About us page</h1>
//         <h2>This website is created by Priya Jha</h2>
//         <UserClass name={"Priya Jha"} location={"New Delhi"}/>
//     </div>
// )
// };
export default About;