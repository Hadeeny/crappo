import { useState } from "react";

const Cal = () => {
    const [hashRate, setHashRate] = useState("");
    const [unit, setUnit] = useState("");
  
    return (
        <div className='w-9/12 mx-auto -mt-44 lg:-mt-32'>
            <div className="bg-white text-black rounded-2xl p-8">
        <form
          className="flex flex-col mb-6 lg:flex-row lg:justify-between space-y-4 lg:items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="lg:w-[28rem] border-transparent outline-none border-b-gray-900 border-[1.4px] h-10 p-2"
            placeholder="Enter your hashrate here"
            value={hashRate}
            onChange={(e) => setHashRate(e.target.value)}
          />
          <select
            name="unit"
            value={unit}
            className='outline-none border-b-gray-900 lg:w-[8rem] w-full border-transparent border-[1.4px]'
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
            className="bg-[#3b82f6] w-[8rem] cursor-pointer text-white flex items-center rounded-3xl px-8 py-2"
          >
            Calculate
          </div>
        </form>
        <h2 className='text-lg font-medium'>ESTIMATE 24 HOUR REVENUE</h2>
        <h2 className="py-4 text-lg font-medium">0.055 130 59 ETH ($1275)</h2>
        <h3>
          Revenue will change based on mining difficulty and Ethereum price.
        </h3>
      </div>
        </div>
    )
}

export default Cal
