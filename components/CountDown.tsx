"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-5">
      <h1 className="font-playfair text-[80px] font-black text-center">
        We’re Getting Ready
      </h1>
      <div className="bg-white z-10 px-8 py-4 rounded-2xl shadow-2xl flex items-center justify-center mt-5">
        {Object.entries(timeLeft).map(([label, value], index, array) => (
          <div key={label} className="flex items-center">
            <div className="text-center">
              <motion.div
                key={value}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[60px] font-black font-playfair text-[#000000] mt-[-22px]"
              >
                {value}
              </motion.div>
              <span className="text-[#000000] font-bold text-base capitalize">
                {label}
              </span>
            </div>
            {index < array.length - 1 && (
              <span className="text-[60px] font-normal font-playfair text-[#000000] mx-16 mb-8">
                :
              </span>
            )}
          </div>
        ))}
      </div>

      <span className="text-center text-lg !mt-24 z-10">
        We will back to something amazing. Getting the latest <br /> updates
        about our games. Please sign up to our newsletter.
      </span>

      <div className="relative w-full max-w-xl z-10">
        <div className="relative flex items-center bg-white p-3 rounded-2xl shadow-xl">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 outline-none bg-transparent text-[#000000] placeholder-[#545454] px-4 py-1"
          />
          <button className="p-2">
            <Image
              src={"/assets/icons/arrow-right.png"}
              width={24}
              height={24}
              alt="arrowRight"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
