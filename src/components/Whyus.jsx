import why from "../Crypto images/why-img.png";
import {motion} from 'framer-motion'

const Whyus = () => {
  return (
    <motion.div className="w-10/12 mx-auto my-8 flex flex-col lg:flex-row-reverse lg:justify-between items-center">
      <div className="space-y-4">
        <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1}}
        className="lg:w-[25rem] w-[20rem]">
          <h2 className="text-5xl">Why you should choose CHAPPO</h2>
        </motion.div>
        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration: 1, delay:1}}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          In, praesentium.
        </motion.p>
        <motion.button
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity:1, scale: 1}}
        transition={{duration: 1}}
        className="bg-[#3b82f6] flex items-center rounded-full px-4 hover:scale-[1.1] duration-500 py-2">
          learn more
        </motion.button>
      </div>
      <motion.img
        initial={{opacity: 0, scale: 0.5}}
        whileInView={{opacity:1, scale: 1}}
        transition={{duration: 1}}
       id="img" alt="why-us" src={why} />
    </motion.div>
  );
};

export default Whyus;
