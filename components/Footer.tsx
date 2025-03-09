import Image from "next/image";
import { useEffect, useState } from "react";
import { translations } from "./element/translation";

export default function Footer() {
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "en";
    setLanguage(storedLang);
  }, []);

  return (
    <>
      <div className="relative bg-background text-white">
        <Image
          src="/assets/images/bg-footer.png"
          alt="background"
          className="w-full h-auto object-cover 2xl:block hidden"
          width={1920}
          height={446}
        />
        <Image
          src="/assets/images/bg-footer-mobile.png"
          alt="background"
          className="w-full h-auto object-cover block 2xl:hidden md:h-[720px]"
          width={1920}
          height={446}
        />
        <div className="absolute left-0 2xl:top-[104px] top-10 2xl:flex items-start w-full 2xl:px-[230px] 2xl:mt-5">
          <div className="2xl:w-1/3 flex flex-col justify-center items-center">
            <img
              src="/assets/images/logo-footer.png"
              alt="logo"
              className="w-[163px] h-[96px] object-cover"
            />
            <div className="flex items-center mt-10">
              <img
                src="/assets/images/twitter.png"
                alt="twitter"
                className="w-10 h-10 object-cover mr-6"
              />
              <img
                src="/assets/images/facebook.png"
                alt="facebook"
                className="w-10 h-10 object-cover mr-6"
              />
              <img
                src="/assets/images/linkedin.png"
                alt="linkedin"
                className="w-10 h-10 object-cover"
              />
            </div>
          </div>
          <div className="2xl:w-1/3 flex flex-col justify-center mr-5 2xl:px-0 px-4 2xl:mt-0 mt-16">
            <div className="text-2xl font-bold">
              {translations[language].address}
            </div>
            <div className="2xl:mt-10 mt-5 flex items-start">
              <img
                src="/assets/icons/location.png"
                alt="facebook"
                className="w-10 h-10 object-cover mr-6"
              />
              <div className="text-sm">
                <div>{translations[language].address1}</div>
                <div className="mt-3">{translations[language].address2}</div>
              </div>
            </div>

            <div className="2xl:mt-10 mt-5 flex items-center">
              <img
                src="/assets/icons/mobile.png"
                alt="facebook"
                className="w-10 h-10 object-cover mr-6"
              />
              <div className="text-sm">
                <div>
                  (+1) 555-0108-000 {translations[language].or} (+236) 555-0108
                </div>
              </div>
            </div>
          </div>

          <div className="2xl:w-1/3 flex flex-col justify-start ml-5 2xl:mt-0 mt-16">
            <div className="text-2xl font-bold">
              {translations[language].subscribe}
            </div>
            <div className="2xl:mt-10 mt-5 text-sm">
              {translations[language].desSubscribe}
            </div>

            <div className="relative w-full max-w-xl z-10 mt-3">
              <div className="relative flex items-center bg-transparent border border-[#FFFFFF] p-3 rounded-2xl shadow-xl">
                <input
                  type="email"
                  placeholder={translations[language].enterEmail}
                  className="flex-1 outline-none bg-transparent text-white placeholder-white px-4 py-1"
                />
                <button className="p-2">
                  <Image
                    src={"/assets/icons/arrow-right-white.png"}
                    width={24}
                    height={24}
                    alt="arrowRight"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black py-7 text-center">
        <span className="text-white text-center text-lg">
          2017 Copyright. Policy.
        </span>
      </div>
    </>
  );
}
