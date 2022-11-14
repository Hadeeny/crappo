import {motion} from 'framer-motion'

const Newsletter = () => {
  return (
    <motion.div 
    initial={{opacity: 0, scale: 0}}
    whileInView={{opacity:1, scale: 1}}
    transition={{duration: 1}} className="w-11/12 mx-auto space-y-6 flex flex-col lg:flex-row lg:justify-between rounded-xl bg-blue-500 px-4 py-8 lg:py-16">
      <div className="space-y-4">
        <h2 className="text-bold text-xl">Start Mining Now</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum.
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe.
        </p>
      </div>
      <form className="flex lg:w-[30rem] flex-col lg:flex-row lg:items-center items-start">
        <input
          type="text"
          placeholder="entermessage"
          className="mr-4 w-11/12 bg-transparent outline-none border-transparent placeholder-slate-300 border-b-white border-[1.4px] p-1"
        />
        <button className="text-black cursor-pointer font-medium bg-white mt-4 lg:mt-0 px-6 py-2 rounded-full">
          Subscribe
        </button>
      </form>
    </motion.div>
  );
};

export default Newsletter;
