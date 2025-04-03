import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header=()=>{
    return(
    <div className="header">
        <div className="logo-coniner">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>

    </div>
    );
};
const RestaurantCard=()=>{
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://b2958125.smushcdn.com/2958125/wp-content/uploads/Chettinadu-Chicken-Biryani-2.png?lossy=1&strip=1&webp=1"
            />
            <h3>foods</h3>
            <h4>Biryani ,North Indian, Asain </h4>
            <h4>4.4</h4>
            <h4>38</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )}
const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);