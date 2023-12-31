import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  const onClick = () => {
    btnNameReact === "Login"
      ? setBtnNameReact("Logout")
      : setBtnNameReact("Login");
  };

  return (
    <div className="flex justify-between items-center shadow-lg p-4 h-14 bg-yellow-200 sm:bg-green-200 lg:bg-gray-300">
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
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-gray-800 text-white hover:bg-white px-4 py-2 rounded">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-gray-800 text-white hover:bg-white px-4 py-2 rounded">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:text-gray-800 text-white hover:bg-white px-4 py-2 rounded font-bold">
            <Link to="/cart">Cart- ({cartItems.length} items)</Link>{" "}
          </li>
          <button
            className="px-4 bg-orange-400 text-white rounded-lg"
            onClick={onClick}
          >
            {btnNameReact}
          </button>
          <li className="text-gray-800 bg-white px-4 py-2 rounded font-bold">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
