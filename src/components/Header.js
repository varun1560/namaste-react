import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onClick = () => {
    btnNameReact === "Login"
      ? setBtnNameReact("Logout")
      : setBtnNameReact("Login");
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center shadow-lg bg-gray-300 p-4 h-14">
      <div className="logo-container">
        <img className="w-20 mix-blend-color-burn" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4">
          <li className=" py-2">{onlineStatus ? "✅" : "🔴"}</li>
          <li className="hover:text-gray-800 text-white hover:bg-white px-4 py-2 rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-800 text-white hover:bg-white px-4 py-2 rounded">
            <Link to="/about text-white">About Us</Link>
          </li>
          <li className="hover:text-gray-800 text-white hover:bg-white px-4 py-2 rounded">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-gray-800 text-white hover:bg-white px-4 py-2 rounded">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:text-gray-800 text-white hover:bg-white px-4 py-2 rounded">
            <Link to="/cart">Cart</Link>{" "}
          </li>
          <button
            className="px-4 bg-orange-400 text-white rounded-lg"
            onClick={onClick}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
