import React from "react";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi"; // Feather icons

const Navbar = () => {
  return (
    <div className="w-9/12 mx-auto pt-6 px-5">
      <div className="navbar bg-gray-100 shadow-sm rounded-xl px-4">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-100 rounded-box w-52"
            >
              <li>
                <a>New Drops🔥</a>
              </li>
              <li>
                <details>
                  <summary>Men</summary>
                  <ul className="p-2 bg-gray-100 rounded-box">
                    <li>
                      <a>Men</a>
                    </li>
                    <li>
                      <a>Women</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Women</a>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>New Drops🔥</a>
              </li>
              <li>
                <details>
                  <summary>Men</summary>
                  <ul className="p-2 bg-gray-100 rounded-box w-40">
                    <li>
                      <a>Men</a>
                    </li>
                    <li>
                      <a>Women</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Women</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center mx-auto">
          <img src="/src/assets/logo.png" alt="Logo" className="h-8 w-auto" />
        </div>    
        <div className="navbar-end flex items-center space-x-1">
      
          <button className="btn btn-ghost">
            <FiSearch className="h-5 w-5" />
          </button>       
          <button className="btn btn-ghost">
            <FiUser className="h-5 w-5" />
          </button>
          <div className="relative">
            <button className="btn btn-ghost">
              <FiShoppingCart className="h-5 w-5" />
            </button>
            <span className="absolute -top-1 -right-1 text-[10px] font-bold bg-yellow-400 text-black rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;