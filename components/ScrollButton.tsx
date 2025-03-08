"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ScrollButton() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed z-20 bottom-5 right-5 2xl:px-4 2xl:py-5 px-2 py-3 shadow-button transition-all 2xl:w-[67px] 2xl:h-[67px] w-[47px] h-[47px]"
    >
      <Image
        src={"/assets/icons/icon-down.png"}
        width={24}
        height={24}
        alt="arrow"
        className={`transition-transform duration-300 ${
          !isTop ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}
