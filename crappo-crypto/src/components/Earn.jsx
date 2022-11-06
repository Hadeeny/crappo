import { useState } from "react";

const Earn = () => {
  const [hashRate, setHashRate] = useState("");
  const [unit, setUnit] = useState("");

  return (
    <div className="w-10/12 mx-auto mt-8 mb-72">
      <h2 className="text-3xl text-center">How much you can earn with us</h2>
      <p className="text-center py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id
        similique temporibus dignissimos tempore odio?
      </p>
      <div className="bg-white text-black rounded-2xl p-8">
        <form
          className="flex flex-col mb-6 lg:flex-row lg:justify-between space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="lg:w-[28rem] h-10 p-2 focus:border-blue-300"
            placeholder="Enter your hashrate here"
            value={hashRate}
            onChange={(e) => setHashRate(e.target.value)}
          />
          <select
            name="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="th/s">TH/s</option>
            <option value="h/s">H/s</option>
            <option value="kh/s">KH/s</option>
            <option value="mh/s">MH/s</option>
            <option value="gh/s">GH/s</option>
          </select>
          <div
            href="/"
            className="bg-[#3b82f6] w-[8rem] text-white flex items-center rounded-3xl px-8 py-2"
          >
            Calculate
          </div>
        </form>
        <h2>ESTIMATE 24 HOUR REVENUE</h2>
        <h2 className="py-4">0.055 130 59 ETH ($1275)</h2>
        <h3>
          Revenue will change based on mining difficulty and Ethereum price.
        </h3>
      </div>
    </div>
  );
};

export default Earn;
