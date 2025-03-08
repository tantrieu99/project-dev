"use client";
import Image from "next/image";
import Counter from "./element/CounterUp";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="fadeInDown">
      <div className="px-96 flex items-stretch mt-32 h-full">
        <div className="w-1/2 mr-5 fadeInLeft  flex flex-col">
          <div className="font-playfair text-6xl font-black">About Us</div>
          <div className="mt-10 text-sm text-[#757575]">
            {`Browse our selection of free online games and have a great time
          without leaving the site! Our Kids Games option also includes game
          reviews, extensive game cheats and walkthroughs, and much more. We
          have exclusive free downloads, videos, and articles as well. Etech
          reviews the most popular kids games from all the most popular video
          gaming platforms, so you don’t need to search around for fun anywhere
          else on the Internet. Explore a whole new world of gaming on Etech.`}
          </div>
          <div className="flex items-end text-[#079BEE] mt-[79px]">
            <Counter count={600} />
            <span className="text-[40px] font-bold mb-4">M</span>
            <span className="text-[80px] font-bold">+</span>
          </div>
          <div className="text-2xl font-bold">Users</div>
          <div className="flex items-end text-[#079BEE] mt-10">
            <Counter count={135} />
            <span className="text-[40px] font-bold mb-4">M</span>
            <span className="text-[80px] font-bold">+</span>
          </div>
          <div className="text-2xl font-bold">Games</div>
        </div>

        <div className="w-1/2 ml-5 fadeInRight bg-[#EEEEEE] flex flex-col justify-center items-center px-[75px] ">
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
              <div className="text-2xl font-bold">24 - Hour</div>
              <div className="text-sm text-[#757575]">
                24/7 access ensures operators' businesses runs smoothly all year
                long.
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
              <div className="text-2xl font-bold">Design</div>
              <div className="text-sm text-[#757575]">
                Combining imaginative universes, play dynamics, and
                unprecedented gameplay, our games transcend the boundaries of
                the virtual world by weaving innovative gameplay.
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
              <div className="text-2xl font-bold">Team</div>
              <div className="text-sm text-[#757575]">
                Etech is an award-winning, international studio of designers,
                artists, animators and producers that create content for the
                biggest names in film and video games.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-[900px] items-center flex justify-center">
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
        <div className="absolute top-96">
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
