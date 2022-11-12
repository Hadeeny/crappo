import { useState } from "react";
import logo from "../Crypto images/logo.svg";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header
      className={`${
        showNav
          ? "h-[100vh] bg-[#0D0D2B] fixed w-full"
          : "w-full py-4 lg:py-0 bg-[#0D0D2B] fixed lg:top-0"
      }`}
    >
      <nav
        className={`${
          showNav
            ? "h-[70%] flex flex-col-reverse py-4 justify-between"
            : "w-11/12 mx-auto flex flex-row lg:py-4 lg:items-center justify-between"
        } `}
      >
        <div className={`${showNav && "hidden"}`}>
          <img className="cursor-pointer" src={logo} alt="logo" />
        </div>
        <div
          className={`${
            !showNav && "hidden"
          } py-8 lg:py-4 flex flex-col gap-y-8 items-center justify-center lg:space-x-14 lg:flex lg:flex-row lg:justify-between`}
        >
          <ul className="flex flex-col gap-y-8 lg:space-x-8 lg:flex lg:flex-row lg:justify-between">
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
          className={`flex lg:hidden text-4xl justify-end`}
        >
          XX
        </div>
      </nav>
    </header>
  );
};

export default Header;
