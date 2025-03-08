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
      className="fixed z-20 bottom-5 right-5 px-4 py-5 shadow-button transition-all"
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
