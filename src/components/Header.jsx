import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../Crypto images/logo.svg";


const Header = () => {
  const [showNav, setShowNav] = useState(false);
  
  // const itemVariants = Variant({})
  const itemVariants = []
  return (
    <motion.header
      className={`${
        showNav
          ? "h-[100vh] bg-[#0D0D2B] fixed w-full"
          : "w-full py-4 lg:py-0 backdrop-blur-xl fixed lg:top-0"
      }`}
    >
      <motion.nav
        className={`${
          showNav
            ? "h-[70%] flex flex-col-reverse py-4 justify-between"
            : "w-11/12 mx-auto flex flex-row lg:py-4 lg:items-center justify-between"
        } `}
      >
        <motion.div animate={{x:20}} className={`${showNav && "hidden"}`}>
          <img className="cursor-pointer" src={logo} alt="logo" />
        </motion.div>
        <motion.div
          className={`${
            !showNav && "hidden"
          } py-8 lg:py-4 flex flex-col gap-y-8 items-center justify-center lg:space-x-14 lg:flex lg:flex-row lg:justify-between`}
        >
          <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
              }
            }
          }} 
          className="flex flex-col gap-y-8 lg:space-x-8 lg:flex lg:flex-row lg:justify-between">
            <motion.li variants={itemVariants}>
              <a className="text-3xl lg:text-[1em]" href="#">
                Home
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a className="text-3xl lg:text-[1em]" href="#">
                About
              </a>
            </motion.li >
            <motion.li variants={itemVariants}>
              <a className="text-3xl lg:text-[1em]" href="#">
                Service
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a className="text-3xl lg:text-[1em] " href="#">
                Contact
              </a>
            </motion.li>
          </motion.ul>
          <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
              }
            }
          }} 
          className="flex gap-x-5 lg:space-x-6">
            <motion.li variants={itemVariants}>
              <a className="text-3xl lg:text-[1em]" href="#">
                Login
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a
                className="text-3xl lg:text-[1em] bg-blue-500 rounded-full py-2 px-4"
                href="#"
              >
                Register
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          onClick={() => {
            setShowNav(!showNav);
          }}
          className={`block lg:hidden text-4xl float-right`}
        >
          <div className='bg-white w-8 h-1'></div>
          <div className='bg-white w-8 h-1 my-1'></div>
          <div className='bg-white w-8 h-1'></div>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
