import feature1 from "../Crypto images/feature-1-img.png";
import feature2 from "../Crypto images/feature-2-img.png";
import feature3 from "../Crypto images/feature-3-img.png";
import {motion} from 'framer-motion'

const Features = () => {
  return (
    <motion.section className="w-11/12 mx-auto">
      <motion.h2
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration: 2}}
       className="text-center text-xl mt-10">
        Market Sentiments, Portfolio, And Run The Infrastructure Of Your Choice
      </motion.h2>
      <div className="flex flex-col space-y-12 items-center my-16 lg:flex-row lg:justify-between">
        <div className=" flex flex-col items-start gap-y-6">
          <motion.h3
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration: 2}}
           className="text-xl font-bold">Invest Smart</motion.h3>
          <motion.p
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration: 2, delay: 1}}
           className="text-sm lg:w-[30rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </motion.p>
          <motion.a
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity:1, scale: 1}}
        transition={{duration: 2}}
           href="/" className="px-4 py-2 duration-500 hover:scale-[1.1] bg-blue-500 rounded-full text-sm">
            learn more
          </motion.a>
        </div>
        <motion.img
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity:1, scale: 1}}
        transition={{duration: 2}} 
        width="500rem" alt="feature1" src={feature1} />
      </div>
      <div className="flex flex-col-reverse gap-y-12 my-14 items-center lg:flex-row lg:justify-between">
        <motion.img
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity:1, scale: 1}}
        transition={{duration: 2}}
         alt="feature2" id="img2" width="500rem" src={feature2} />
        <div className=" flex flex-col items-start gap-y-6">
          <motion.h3 
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration: 2}} className="text-xl font-bold">Detailed Statistics</motion.h3>
          <motion.p
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration: 2, delay: 1}}
           className="text-sm lg:w-[30rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </motion.p>
          <motion.a
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity:1, scale: 1}}
        transition={{duration: 2}}
           href="/" className="py-2 duration-500 hover:scale-[1.1] px-4 bg-blue-500 rounded-full text-sm">
            learn more
          </motion.a>
        </div>
      </div>
      <div className="flex flex-col my-14 lg:flex-row space-y-12 items-center lg:justify-between">
        <div className=" flex flex-col items-start gap-y-6">
          <motion.h3 
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration: 2}} className="text-xl font-bold">
            Grow Your Profit And Track Your Investments
          </motion.h3>
          <motion.p
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration: 2, delay: 1}} className="text-sm lg:w-[30rem] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </motion.p>
          <motion.a
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity:1, scale: 1}}
        transition={{duration: 2}}
           href="/" className="px-4 py-2 bg-blue-500 duration-500 hover:scale-[1.1] rounded-full text-sm">
            learn more
          </motion.a>
        </div>
        <motion.img
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity:1, scale: 1}}
        transition={{duration: 2}}
         alt="feature3" width="600rem" className="img2" src={feature3} />
      </div>
    </motion.section>
  );
};

export default Features;
