import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        UserInfo:{name: "Priya",
        },
    };
    console.log("Child constructor");
  }

  async componentDidMount(){

    const data = await fetch("https://api.github.com/users/mikasa-404");
    const json= await data.json();
    this.setState(
        {UserInfo: json},
    );
  }

  componentDidUpdate(){
    console.log("Component did update");
  }
  componentWillUnmount(){
    console.log("Unmount");

  }

  render() {
    console.log("Child render");

    const { name, location, avatar_url} = this.state.UserInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h1>Nameee: {name}</h1>
        <h2>Location: {location} </h2>
        <h3>Contact: </h3>
      </div>
    );
  }
}
export default UserClass;
