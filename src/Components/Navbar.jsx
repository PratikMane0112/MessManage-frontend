import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import LogOut from "../Svg/nav-logo.svg";
import useAuth from "./../Auth/useAuth";
import useLogout from "../Api/Logout";

const Navbar = () => {
  const logout = useLogout();
  const { auth } = useAuth();
  const [loginModal, setLoginmodal] = useState(false);

  return (
    <header className="bg-white/80 shadow-md z-40 fixed w-full">
      <div className="container flex flex-wrap  mb-4 min-h-[10vh] max-w-[100%] bg-white/80 shadow-md  z-40 ease-in duration-300 backdrop-blur-md  flex-col md:flex-row items-center fixed">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900  md:mb-0"
        >
          <img src={LogOut} alt="Svg" className="h-14 cursor-pointer" />
        </Link>
        <nav className="md:ml-auto md:mr-auto px-4 flex flex-wrap items-center text-base justify-center">
          <Link
            to="/"
            className="text-[#191919] text-lg font-medium mr-5 hover:text-red-500  hover:no-underline"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-[#191919] text-lg font-medium mr-5 hover:text-red-500  hover:no-underline"
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            className="text-[#191919] text-lg font-medium mr-5 hover:text-red-500  hover:no-underline"
          >
            About us
          </Link>
        </nav>
        {auth.role === 0 ? (
          <div>
            <Link
              to="/user"
              className="mr-5 inline-flex items-center  bg-black text-white font-semibold text-lg hover:no-underline py-1 px-3 focus:outline-none  rounded p-2 md:mt-0"
            >
              Users
            </Link>
            <button
              className="inline-flex items-center bg-black border-0 text-white font-semibold text-lg mr-4 py-1 px-3 focus:outline-none  rounded    p-2 md:mt-0"
              onClick={logout}
            >
              Logout
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        ) : auth.role === 1 ? (
          <>
            <Link
              to="/admin"
              className="mr-5 inline-flex items-center  bg-black text-white font-semibold text-lg hover:no-underline py-1 px-3 focus:outline-none  rounded p-2 md:mt-0"
            >
              Admin
            </Link>
            <button
              className="inline-flex items-center bg-black border-0 text-white font-semibold text-lg mr-4 py-1 px-3 focus:outline-none  rounded    p-2 md:mt-0"
              onClick={logout}
            >
              Logout
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </>
        ) : auth.role === 2 ? (
          <>
            <Link
              to="/employee"
              className="mr-5 inline-flex items-center  bg-black text-white font-semibold text-lg hover:no-underline py-1 px-3 focus:outline-none  rounded p-2 md:mt-0"
            >
              Employee
            </Link>
            <button
              className="inline-flex items-center bg-black border-0 text-white font-semibold text-lg mr-4 py-1 px-3 focus:outline-none  rounded    p-2 md:mt-0"
              onClick={logout}
            >
              Logout
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </>
        ) : (
          <button
            className="inline-flex items-center bg-[#F54748]  border-0 text-white font-semibold text-lg mr-4 py-1 px-3 focus:outline-none  rounded    p-2 md:mt-0"
            onClick={() => setLoginmodal(true)}
          >
            Login
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        )}

        {loginModal ? <Modal setLoginmodal={setLoginmodal} /> : ""}
      </div>
    </header>
  );
};

export default Navbar;

