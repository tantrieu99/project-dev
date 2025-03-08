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
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="relative bg-background text-white overflow-x-hidden">
        <Image
          src="/assets/images/BG.png"
          alt="background"
          className="w-full h-auto object-cover 2xl:block hidden"
          width={1920}
          height={1018}
        />
        <Image
          src="/assets/images/bg-mobile.png"
          alt="background"
          className="w-full h-auto object-cover block 2xl:hidden"
          width={1920}
          height={1018}
        />
        <Image
          src="/assets/images/Fairy.png"
          alt="background"
          className="absolute 2xl:w-[838px] w-[300px] h-auto object-cover 2xl:left-0 left-20 right-0 2xl:bottom-0 bottom-4"
          width={838}
          height={838}
        />

        <div className="absolute left-0 top-0 flex items-center justify-between w-full px-4 lg:px-20 mt-5">
          <img
            src="/assets/images/white_logo.png"
            alt="logo"
            className="2xl:w-[109px] 2xl:h-[64px] w-[68px] h-10 object-cover"
          />

          {!isMobile ? (
            <div className="flex items-center gap-10 lg:gap-20 text-white font-semibold uppercase text-sm">
              {["About Us", "Games", "Partners", "Contact Us"].map((item) => (
                <a key={item} href="#" className="hover:text-gray-300">
                  {item}
                </a>
              ))}
              <Language />
            </div>
          ) : (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white"
            >
              <Image
                src="/assets/icons/menu.png"
                alt="menu"
                className="w-10 h-10 object-cover"
                width={50}
                height={50}
              />
            </button>
          )}

          {menuOpen && isMobile && (
            <div className="fixed overflow-hidden inset-0 z-50 bg-white text-black flex flex-col items-center pt-24">
              {["ABOUT US", "GAMES", "PARTNERS", "CONTACT US"].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`text-center text-lg font-semibold hover:text-gray-300 w-[90%] py-6 ${index != 3 ? 'border-b-2 border-[#EEEEEE]' : ''}`}
                >
                  {item}
                </a>
              ))}
              <div className="absolute top-5 flex items-center justify-between w-full px-4">
                <Language />
                <button
                  onClick={() => setMenuOpen(false)}
                  className=" text-white text-2xl"
                >
                  <Image
                    src="/assets/icons/close.png"
                    alt="menu"
                    className="w-10 h-10 object-cover"
                    width={50}
                    height={50}
                  />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="absolute inset-0 flex flex-col 2xl:top-[294px] top-24 items-center">
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

      <div className="2xl:mt-[246px] mt-20 bg-[#F6F6F6] 2xl:py-[120px] py-10">
        <Partners />
      </div>

      <Footer />
    </>
  );
}
