import React, { useState } from "react";
import bitcoin from "../Crypto images/bitcon.png";
import ethereum from "../Crypto images/ethereum.png";
import litecoin from "../Crypto images/litecoin.png";
import angle from "../Crypto images/angle.svg";
import angle2 from "../Crypto images/angle2.svg";
import Cal from "./Cal";
import {motion} from 'framer-motion'

const CoinCard = () => {
  const [currency, setCurrency] = useState([
    {
      id: 1,
      name: "Bitcoin",
      logo: `${bitcoin}`,
      pitch:
        "Digital currency in which a record of transactions is maintained.",
      cta: "start mining",
      reveal: false,
    },
    {
      id: 2,
      name: "Ethereum",
      logo: `${ethereum}`,
      pitch:
        "Blockchain technology to create and run decentralized digital applications.",
      cta: "start mining",
      reveal: false,
    },
    {
      id: 3,
      name: "Litecoin",
      logo: `${litecoin}`,
      pitch:
        "Cryptocurrency that enables instant payments to anyone in the world.",
      cta: "start mining",
      reveal: false,
    },
  ]);

  const toggleView = (id) => {
    setCurrency(
      currency.map((x) =>
        x.id === id ? { ...x, reveal: true } : { ...x, reveal: false }
      )
    );
  };
  return (
    <motion.section className="bg-[#F8F9FA] w-full flex flex-col items-center">
      <Cal />
      <div className="w-full">
        <motion.h2
        initial={{opacity: 0, y: 40}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration: 2}}
         className="text-black text-center px-2 text-2xl mt-14 mb-12">
          Trade Securely And Market The High Growth Cryptocurrencies.
        </motion.h2>
        <div className="flex flex-col w-11/12 mx-auto gap-y-8 lg:flex-row lg:justify-between items-center mb-10">
          {currency.map((curr) => (
            <div
              key={curr.id}
              onClick={() => toggleView(curr.id)}
              className={`bg-white cursor-pointer ${
                curr.reveal ? "bg-[#2B076E] text-white" : "text-black"
              } space-y-8 p-8 flex flex-col rounded-xl items-center`}
            >
              <motion.img src={curr.logo} className="crypto-card" alt="bitcoin" />
              <h2>{curr.name}</h2>
              <p className="text-center w-[18rem]">{curr.pitch}</p>
              <button
                className={`rounded-full ${
                  curr.reveal
                    ? "bg-blue-500 hover:animate-bounce flex p-4 space-x-3 items-center"
                    : "border-black border-2 p-6"
                } `}
              >
                <div className={`${curr.reveal ? "block" : "hidden"}`}>
                  {curr.cta}
                </div>
                <motion.img src={curr.reveal ? `${angle2}` : `${angle}`} alt="angle" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CoinCard;
