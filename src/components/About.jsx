import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }
  render(){
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <User name={"Dimpal "} location={"Jorhat"}/>
        <UserClass name={"Dimpal by class"}location={"Jorhat"}/>
      </div>

    )
  }
};
  
  export default About;