"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const partners = [
  "/assets/images/eagames.png",
  "/assets/images/games.png",
  "/assets/images/powerup.png",
  "/assets/images/disney.png",
  "/assets/images/bookpro.png",
  "/assets/images/sega.png",
  "/assets/images/2k.png",
];

export default function PartnerSlider() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <button className="custom-prev rounded-xl custom-button-slide absolute 2xl:left-[-40px] left-8 top-1/2 transform -translate-y-1/2 z-10">
        <Image
          src="/assets/icons/left-slide.png"
          alt="Previous"
          width={40}
          height={40}
          className="w-10 h-10"
        />
      </button>

      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 3 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="flex items-center"
      >
        {partners.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center h-auto"
          >
            <Image
              src={logo}
              alt={`Partner ${index}`}
              width={188}
              height={80}
              className="object-contain w-[188px] h-[80px] sm:w-[150px] sm:h-[72px] xl:w-[188px] xl:h-[80px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-next rounded-xl custom-button-slide absolute 2xl:right-[-40px] right-8 top-1/2 transform -translate-y-1/2 z-10">
        <Image
          src="/assets/icons/right-slide.png"
          alt="Next"
          width={40}
          height={40}
          className="w-10 h-10"
        />
      </button>
    </div>
  );
}
