import why from "../Crypto images/why-img.png";

const Whyus = () => {
  return (
    <div className="w-10/12 mx-auto my-8 flex flex-col lg:flex-row-reverse lg:justify-between items-center">
      <div className="space-y-4">
        <div className="lg:w-[25rem] w-[20rem]">
          <h2 className="text-5xl">Why you should choose CHAPPO</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          In, praesentium.
        </p>
        <button className="bg-[#3b82f6] flex items-center rounded-full px-4 hover:scale-[1.1] duration-500 py-2">
          learn more
        </button>
      </div>
      <img id="img" alt="why-us" src={why} />
    </div>
  );
};

export default Whyus;
