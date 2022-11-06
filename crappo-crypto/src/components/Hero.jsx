import hero from "../Crypto images/hero-img.png";
import play from "../Crypto images/play.svg";
const Hero = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
      <div className="space-y-4">
        <div className="bg-[#4B5563] px-4 py-2 lg:w-[23rem] rounded-3xl">
          <span className="bg-white mr-2 text-black rounded-2xl py-1 -ml-2 px-1">
            70% save
          </span>
          for the best black friday deals
        </div>
        <div className="lg:w-[25rem] w-[20rem]">
          <h2 className="text-5xl">
            Fastest & Secure Platform To Invest In Cryto
          </h2>
        </div>
        <p>
          buy and sell crytocurrencies by trusted 10M wallets, in over 100M
          transactions
        </p>
        <button className="bg-[#3b82f6] flex items-center rounded-3xl px-8 py-2">
          Try for free
          <img
            alt="play"
            className="bg-white ml-4 rounded-full p-2"
            src={play}
          />
        </button>
      </div>
      <img width="450rem" src={hero} alt="hero" />
    </div>
  );
};

export default Hero;
