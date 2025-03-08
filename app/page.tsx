"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import CountDown from "@/components/CountDown";
import Language from "@/components/Language";
import ScrollButton from "@/components/ScrollButton";
import Image from "next/image";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const LazyAboutUs = dynamic(() => import("@/components/AboutUs"), {
  ssr: false,
});
const LazyOurGames = dynamic(() => import("@/components/OurGames"), {
  ssr: false,
});

export default function Home() {
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const ourGamesRef = useRef<HTMLDivElement | null>(null);
  const [isAboutUsVisible, setIsAboutUsVisible] = useState(false);
  const [isOurGamesVisible, setIsOurGamesVisible] = useState(false);

  useEffect(() => {
    if (!aboutUsRef.current) return;

    const aboutUsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutUsVisible(true);
          aboutUsObserver.disconnect();
        }
      },
      { rootMargin: "50px" }
    );

    aboutUsObserver.observe(aboutUsRef.current);

    return () => aboutUsObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!isAboutUsVisible || !ourGamesRef.current) return;

    const ourGamesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOurGamesVisible(true);
          ourGamesObserver.disconnect();
        }
      },
      { rootMargin: "10px" }
    );

    ourGamesObserver.observe(ourGamesRef.current);

    return () => ourGamesObserver.disconnect();
  }, [isAboutUsVisible]);

  return (
    <>
      <div className="relative bg-background text-white">
        <Image
          src="/assets/images/BG.png"
          alt="background"
          className="w-full h-auto object-cover"
          width={1920}
          height={1018}
        />
        <Image
          src="/assets/images/Fairy.png"
          alt="background"
          className="absolute w-[838px] h-auto object-cover left-0 bottom-0"
          width={838}
          height={838}
        />

        <div className="absolute left-0 top-0 flex items-center justify-between w-full px-20 mt-5">
          <img
            src="/assets/images/white_logo.png"
            alt="logo"
            className="w-[109px] h-[64px] object-cover"
          />
          <div className="flex items-center gap-20 text-white font-semibold uppercase text-sm">
            {["About Us", "Games", "Partners", "Contact Us"].map((item) => (
              <a key={item} href="#" className="hover:text-gray-300">
                {item}
              </a>
            ))}
            <Language />
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col top-[294px] items-center">
          <CountDown />
        </div>
        <ScrollButton />
      </div>

      <div
        ref={aboutUsRef}
        className="min-h-[400px] flex justify-center items-center"
      >
        {!isAboutUsVisible ? (
          <p className="text-white text-lg animate-pulse">Loading...</p>
        ) : (
          <LazyAboutUs />
        )}
      </div>

      <div
        ref={ourGamesRef}
        className="min-h-[400px] flex justify-center items-center"
      >
        {!isOurGamesVisible ? (
          <p className="text-white text-lg animate-pulse">Loading...</p>
        ) : (
          <LazyOurGames />
        )}
      </div>

      <div className="mt-[246px] bg-[#F6F6F6] py-[120px]">
        <Partners />
      </div>

      <Footer />
    </>
  );
}
