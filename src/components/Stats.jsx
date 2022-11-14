import bars from "../Crypto images/bars.svg";
import triangle from "../Crypto images/triangle.svg";
import user from "../Crypto images/user.svg";
import {motion} from 'framer-motion'
const Stats = () => {
  return (
    <div className="w-10/12 mx-auto my-12 flex flex-col space-y-12 lg:flex-row lg:justify-between items-center">
      <motion.div 
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration: 1}}
      className="flex items-center lg:-mb-12 space-x-4">
        <motion.img alt="bars" className="p-2 bg-[#4B5563] rounded-full" src={bars} />
        <div className="">
          <h2 className="text-2xl">$30B</h2>
          <p>Digital Currency Exchange</p>
        </div>
      </motion.div>

      <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1, delay: 1}} 
      className="flex items-center space-x-4">
        <motion.img
          alt="triangle"
          className="p-2 bg-[#4B5563] rounded-full"
          src={triangle}
        />
        <div className="">
          <h2 className="text-2xl">190+</h2>
          <p>Countries Around The World</p>
        </div>
      </motion.div>

      <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1, delay: 2}} 
      className="flex items-center space-x-4">
        <motion.img alt="user" className="p-2 bg-[#4B5563] rounded-full" src={user} />
        <div className="">
          <h2 className="text-2xl">$30M</h2>
          <p>Trusted Wallet Investors</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Stats;
