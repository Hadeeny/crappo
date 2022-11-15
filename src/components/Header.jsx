import { useState } from "react";
import logo from "../Crypto images/logo.svg";
import { motion } from "framer-motion";
const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className="w-full py-4 lg:py-0 bg-[#0D0D2B]">
        <nav className="w-11/12 mx-auto flex flex-row lg:py-4 lg:items-center items-center justify-between">
          <div>
            <img className="cursor-pointer" src={logo} alt="logo" />
          </div>
          <div className="py-4 hidden lg:flex items-center space-x-14 justify-between">
            <ul className="flex space-x-8 justify-between">
              <li>
                <a className="text-3xl lg:text-[1em]" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-3xl lg:text-[1em]" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-3xl lg:text-[1em]" href="#">
                  Service
                </a>
              </li>
              <li>
                <a className="text-3xl lg:text-[1em] " href="#">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="flex gap-x-5 lg:space-x-6">
              <li>
                <a className="text-3xl lg:text-[1em]" href="#">
                  Login
                </a>
              </li>
              <li>
                <a
                  className="text-3xl lg:text-[1em] bg-blue-500 rounded-full py-2 px-4"
                  href="#"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
          <div
            onClick={() => {
              setShowNav(!showNav);
            }}
            className={`flex items-end px-4 cursor-pointer flex-col lg:hidden`}
          >
            <div className="bg-white w-8 h-[3px]"></div>
            <div className="bg-white my-2 w-8 h-[3px]"></div>
            <div className="bg-white w-8 h-[3px]"></div>
          </div>
        </nav>
      </header>
      <motion.div
        className={`backdrop-blur-3xl
        ${showNav ? "left-0":  'left-full'}  
        fixed top-0 lg:hidden w-full duration-500 z-[1000] h-[100vh]`}
      >
        <div className="flex flex-col gap-y-10">
          <div
            onClick={() => {
              setShowNav(!showNav);
            }}
            className="flex cursor-pointer justify-end text-3xl p-8"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-3xl absolute right-6 top-6 cursor-pointer "
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
            </svg>
          </div>
          <nav className="space-y-10">
            <ul className="flex flex-col gap-y-10 items-center">
              <li>
                <a className="text-3xl lg:text-[1em]" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-3xl lg:text-[1em]" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-3xl lg:text-[1em]" href="#">
                  Service
                </a>
              </li>
              <li>
                <a className="text-3xl lg:text-[1em] " href="#">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="flex justify-center gap-x-5 lg:space-x-6">
              <li>
                <a className="text-3xl lg:text-[1em]" href="#">
                  Login
                </a>
              </li>
              <li>
                <a
                  className="text-3xl lg:text-[1em] bg-blue-500 rounded-full py-2 px-4"
                  href="#"
                >
                  Register
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
