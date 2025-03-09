import { useEffect, useState } from "react";
import PartnerSlider from "./element/SliderPartners";
import { translations } from "./element/translation";

export default function Partners() {
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "en";
    setLanguage(storedLang);
  }, []);
  return (
    <div>
      <div className="font-playfair 2xl:text-6xl text-[40px] font-black text-center">
        {translations[language].ourPartners}
      </div>
      <div className="2xl:mt-20 mt-10">
        <PartnerSlider />
      </div>
    </div>
  );
}
