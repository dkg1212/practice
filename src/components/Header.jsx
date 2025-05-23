import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus=useOnlineStatus
  console.log("Header render");

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 hover:text-blue-700">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link className="hover:text-blue-700" to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:text-blue-700">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:text-blue-700">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:text-blue-700">Cart</li>
          <button
            className="px-4 items-center bg-green-300 rounded-2xl hover:bg-green-400"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;