import hero from "../Crypto images/hero-img.png";
import play from "../Crypto images/play.svg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <motion.div className="w-10/12 lg:mt-[5rem] mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
      <motion.div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 2 }}
          className="bg-[#4B5563] mt-20 lg:mt-0 px-4 py-2 lg:w-[23rem] rounded-3xl"
        >
          <span className="bg-white mr-2 text-black rounded-2xl py-1 -ml-2 px-1">
            70% save
          </span>
          for the best black friday deals
        </motion.div>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          transition={{ duration: 2 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="lg:w-[25rem] w-[20rem]"
        >
          <h2 className="text-5xl">
            Fastest & Secure Platform To Invest In Cryto
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          buy and sell crytocurrencies by trusted 10M wallets, in over 100M
          transactions
        </motion.p>
        <motion.button
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="bg-[#3b82f6] flex items-center duration-500 hover:scale-[1.1] rounded-3xl px-6 py-1"
        >
          Try for free
          <motion.img
            alt="play"
            className="bg-white ml-4 rounded-full p-2"
            src={play}
          />
        </motion.button>
      </motion.div>
      <motion.img
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5 }}
        width="450rem"
        src={hero}
        alt="hero"
      />
    </motion.div>
  );
};

export default Hero;
