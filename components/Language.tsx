"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Language() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const languages = [
    { code: "vi", name: "Vietnamese", flag: "/assets/icons/vn.png" },
    { code: "en", name: "English", flag: "/assets/icons/us.png" },
  ];

  // Lấy ngôn ngữ từ localStorage khi component mount
  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
  }, []);

  // Hàm thay đổi ngôn ngữ
  const changeLanguage = (lang: string) => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
    setIsOpen(false);
    window.location.reload(); // Reload để áp dụng thay đổi
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 text-white 2xl:bg-transparent bg-[#F6F6F6] 2xl:border-0 border border-[#AFAFAF] 2xl:rounded rounded-xl px-3 py-2 hover:bg-opacity-30"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={languages.find((l) => l.code === language)?.flag || ""}
          width={33}
          height={33}
          alt="Flag"
        />
        <Image
          src={"/assets/icons/arrow-drop-down.png"}
          width={24}
          height={24}
          alt="Dropdown"
          className="2xl:block hidden"
        />
        <Image
          src={"/assets/icons/arrow-drop-down-black.png"}
          width={24}
          height={24}
          alt="Dropdown"
          className="2xl:hidden block"
        />
      </button>

      {isOpen && (
        <div className="absolute 2xl:right-0 right-[-70px] mt-2 bg-white rounded-lg shadow-lg w-40 px-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`flex items-center w-full py-2 hover:bg-gray-100 ${lang.code == "vi" ? "border-b-2 border-[#C4C4C4]" : ""}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <div className="flex-shrink-0 mr-2 w-6">
                {language === lang.code && (
                  <Image src={"/assets/icons/tick.png"} width={24} height={24} alt="tick" />
                )}
              </div>
              <div className="flex items-center gap-2">
                <Image src={lang.flag} width={33} height={33} alt={lang.name} />
                <span className="text-[#000000] text-xs">{lang.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
