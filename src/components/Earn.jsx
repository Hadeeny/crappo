import {motion} from 'framer-motion'

const Earn = () => {
  return (
    <motion.div className="w-10/12 mx-auto mt-8 mb-72">
      <motion.h2
      initial={{opacity: 0, scale: 0}}
      whileInView={{opacity:1, scale: 1}}
      transition={{duration: 1}}
      className="text-3xl text-center">How much you can earn with us</motion.h2>
      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration: 1, delay:1}}
      className="text-center py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id
        similique temporibus dignissimos tempore odio?
      </motion.p>
    </motion.div>
  );
};

export default Earn;
