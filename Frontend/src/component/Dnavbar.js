import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "./logo.png";
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    localStorage.removeItem("id");
    navigate("/");
  };
  return (
    <nav className="flex items-center justify-between bg-gray-900 py-4 px-6">
      <div className="flex items-center">
        <img src={img} alt="logo" className="h-8 w-8 mr-3" />
        <h1 className="text-white text-lg font-bold md:text-xl sm:text-2xl">
          <Link to="/">LIBRARY MANAGEMENT SYSTEM</Link>
        </h1>
      </div>

      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={handleMenuToggle}
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="text-white"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="text-white"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex items-center md:ml-6 mt-4 md:mt-0`}
      >
        <h1 className="text-white text-lg font-bold md:text-xl sm:text-2xl">
          {props.name}
        </h1>
        <Link
          to="/"
          className="block text-white mt-4 md:inline-block md:mt-0 md:ml-4"
        >
          Home
        </Link>

        <Link
          to="/"
          className="text-white py-1 px-4 rounded hover:bg-green-500 hover:text-white block mt-4 md:inline-block md:mt-0 md:ml-4"
          onClick={logout}
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
