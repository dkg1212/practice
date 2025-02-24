import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement("div",{},[
    React.createElement("div",{},[
        React.createElement("h1",{},"Helloworld From React 🚀"),
        React.createElement("h2",{},"Helloworld From React")
    ]),
    React.createElement("div",{},[
        React.createElement("h1",{},"Helloworld From React"),
        React.createElement("h2",{},"Helloworld From React")
    ])

]);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);