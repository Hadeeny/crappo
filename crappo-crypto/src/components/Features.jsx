import feature1 from "../Crypto images/feature-1-img.png";
import feature2 from "../Crypto images/feature-2-img.png";
import feature3 from "../Crypto images/feature-3-img.png";

const Features = () => {
  return (
    <section className="w-11/12 mx-auto">
      <h2 className="text-center text-xl mt-10">
        Market Sentiments, Portfolio, And Run The Infrastructure Of Your Choice
      </h2>
      <div className="flex flex-col space-y-12 items-center my-16 lg:flex-row lg:justify-between">
        <div className=" flex flex-col items-start gap-y-6">
          <h3 className="text-xl font-bold">Invest Smart</h3>
          <p className="text-sm lg:w-[30rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </p>
          <a href="/" className="px-4 py-2 duration-500 hover:scale-[1.1] bg-blue-500 rounded-full text-sm">
            learn more
          </a>
        </div>
        <img width="500rem" alt="feature1" src={feature1} />
      </div>
      <div className="flex flex-col-reverse gap-y-12 my-14 items-center lg:flex-row lg:justify-between">
        <img alt="feature2" id="img2" width="500rem" src={feature2} />
        <div className=" flex flex-col items-start gap-y-6">
          <h3 className="text-xl font-bold">Detailed Statistics</h3>
          <p className="text-sm lg:w-[30rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </p>
          <a href="/" className="py-2 duration-500 hover:scale-[1.1] px-4 bg-blue-500 rounded-full text-sm">
            learn more
          </a>
        </div>
      </div>
      <div className="flex flex-col my-14 lg:flex-row space-y-12 items-center lg:justify-between">
        <div className=" flex flex-col items-start gap-y-6">
          <h3 className="text-xl font-bold">
            Grow Your Profit And Track Your Investments
          </h3>
          <p className="text-sm lg:w-[30rem] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </p>
          <a href="/" className="px-4 py-2 bg-blue-500 duration-500 hover:scale-[1.1] rounded-full text-sm">
            learn more
          </a>
        </div>
        <img alt="feature3" width="600rem" className="img2" src={feature3} />
      </div>
    </section>
  );
};

export default Features;
