import React from "react";
import ReactDOM from "react-dom/client";

const Title =()=>(
<h1 className="head" tabIndex="5">
    "Namastay React🚀"
    </h1>
);

const HeadingComponent =()=>(
    <div id="container">
        <Title/>
        <h1 className="heading">Namastay React From Functional component 🚀 </h1>
    </div>
);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);