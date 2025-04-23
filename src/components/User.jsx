import { useState ,useEffect} from "react";

const User=(props)=>{
    const [count ,setCount]=useState(0);
    const [count2]=useState(1);
    useEffect(()=>{

    },[]);

    return(
        <div className="user-card">
            <h1>Count={count}</h1>
            <h1>Count2={count2}</h1>
            <h3>Name: {props.name}</h3>
            <h4>Location:Jorhat</h4>
            <h5>Contact:XXXXXXXX45@gmail.com</h5>
        </div>
    );
};

export default User;