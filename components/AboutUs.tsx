"use client";
import Image from "next/image";
import Counter from "./element/CounterUp";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { translations } from "./element/translation";

export default function AboutUs() {
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "en";
    setLanguage(storedLang);
  }, []);
  return (
    <div className="fadeInDown">
      <div className="2xl:px-96 2xl:flex items-stretch 2xl:mt-32 mt-12 h-full w-full">
        <div className="2xl:w-1/2 2xl:px-0 px-4 mr-5 fadeInLeft  flex flex-col">
          <div className="font-playfair 2xl:text-6xl text-[40px] font-black">
            {translations[language].about}
          </div>
          <div className="2xl:mt-10 mt-4 text-sm text-[#757575]">
            {translations[language].desAbout}
          </div>
          <div className="2xl:block flex items-center 2xl:mt-0 mt-10">
            <div className="">
              <div className="flex items-end text-[#079BEE] 2xl:mt-[79px]">
                <Counter count={600} />
                <span className="2xl:text-[40px] text-[20px] font-bold 2xl:mb-4 mb-2">
                  M
                </span>
                <span className="2xl:text-[80px] text-[40px] font-bold">+</span>
              </div>
              <div className="text-2xl font-bold">
                {translations[language].users}
              </div>
            </div>

            <div className="2xl:ml-0 ml-14">
              <div className="flex items-end text-[#079BEE] 2xl:mt-10">
                <Counter count={135} />
                <span className="2xl:text-[80px] text-[40px] font-bold">+</span>
              </div>
              <div className="text-2xl font-bold">
                {translations[language].games}
              </div>
            </div>
          </div>
        </div>

        <div className="2xl:w-1/2 2xl:ml-5 fadeInRight bg-[#EEEEEE] flex flex-col justify-center items-center 2xl:px-[75px] 2xl:py-0 py-10 px-4 2xl:mt-0 mt-10">
          <div className="flex items-start">
            <div className="w-[50px] h-[50px] min-w-[50px] min-h-w-[50px] rounded-full bg-[#E3FCFF] items-center flex justify-center mr-6">
              <Image
                src="/assets/icons/calendar-tick.png"
                alt="background"
                className="w-6 h-6 object-cover"
                width={24}
                height={24}
              />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {translations[language].hour24}
              </div>
              <div className="text-sm text-[#757575]">
                {translations[language].desHour24}
              </div>
            </div>
          </div>

          <div className="flex items-start mt-10">
            <div className="w-[50px] h-[50px] min-w-[50px] min-h-w-[50px] rounded-full bg-[#E3FCFF] items-center flex justify-center mr-6">
              <Image
                src="/assets/icons/pen-tool.png"
                alt="background"
                className="w-6 h-6 object-cover"
                width={24}
                height={24}
              />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {translations[language].design}
              </div>
              <div className="text-sm text-[#757575]">
                {translations[language].desDesign}
              </div>
            </div>
          </div>

          <div className="flex items-start mt-10">
            <div className="w-[50px] h-[50px] min-w-[50px] min-h-w-[50px] rounded-full bg-[#E3FCFF] items-center flex justify-center mr-6">
              <Image
                src="/assets/icons/people.png"
                alt="background"
                className="w-6 h-6 object-cover"
                width={24}
                height={24}
              />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {translations[language].team}
              </div>
              <div className="text-sm text-[#757575]">
                {translations[language].desTeam}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative 2xl:min-h-[900px] min-h-[500px] items-center flex justify-center">
        <div className="absolute top-10 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: [0, 1, -1, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
          >
            <Image
              src="/assets/images/Illustrator.png"
              alt="background"
              className="w-auto h-full object-cover"
              width={533}
              height={437}
            />
          </motion.div>
        </div>
        <div className="absolute 2xl:top-96 top-[270px]">
          <Image
            src="/assets/images/Pin-map.png"
            alt="background"
            className="w-auto h-full object-cover"
            width={1160}
            height={428}
          />
        </div>
      </div>
    </div>
  );
}
