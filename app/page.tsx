import Language from "@/components/Language";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative bg-background text-white">
      <Image
        // className="dark:invert"
        src="/assets/images/BG.png"
        alt="background"
        className="w-full h-auto object-cover"
        width={1920}
        height={1018}
      />
      <div className="absolute left-0 top-0 flex items-center justify-between w-full px-20 mt-5">
        <img
          src="/assets/images/white_logo.png"
          alt="logo"
          className="w-[109px] h-[64px] object-cover"
        />
        <div className="flex items-center gap-20 text-white font-semibold uppercase text-sm">
          <a href="#" className="hover:text-gray-300">
            About Us
          </a>
          <a href="#" className="hover:text-gray-300">
            Games
          </a>
          <a href="#" className="hover:text-gray-300">
            Partners
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact Us
          </a>
          <Language />
        </div>
      </div>
    </div>
  );
}
