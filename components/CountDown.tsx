"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { translations } from "./element/translation";

export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "en";
    setLanguage(storedLang);
  }, []);

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
      <h1 className="font-playfair text-[80px] font-black text-center 2xl:block hidden">
        {translations[language].gettingReady}
      </h1>
      <h1 className="font-playfair text-[40px] font-black text-center 2xl:hidden block">
        {translations[language].gettingReadyMobile1}
        <br />
        {translations[language].gettingReadyMobile2}
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
                className="2xl:text-[60px] text-[36px] font-black font-playfair text-[#000000] mt-[-22px]"
              >
                {value}
              </motion.div>
              <span className="text-[#000000] font-bold 2xl:text-base text-xs capitalize">
                {label == "days"
                  ? translations[language].days
                  : label == "hours"
                  ? translations[language].hours
                  : label == "minutes"
                  ? translations[language].minutes
                  : translations[language].seconds}
              </span>
            </div>
            {index < array.length - 1 && (
              <span className="2xl:text-[60px] text-[36px] font-normal font-playfair text-[#000000] 2xl:mx-16 mx-3 mb-8">
                :
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="text-center 2xl:text-lg text-xs 2xl:!mt-24 mt-10 z-10 2xl:px-0 px-4">
        {translations[language].weWill1}
        <br />
        {translations[language].weWill2}
      </div>

      <div className="relative w-full max-w-xl z-10 2x:px-0 px-4">
        <div className="relative flex items-center bg-white p-3 rounded-2xl shadow-xl">
          <input
            type="email"
            placeholder={translations[language].enterEmail}
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
