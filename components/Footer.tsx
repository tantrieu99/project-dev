import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="relative bg-background text-white">
        <Image
          src="/assets/images/bg-footer.png"
          alt="background"
          className="w-full h-auto object-cover"
          width={1920}
          height={446}
        />
        <div className="absolute left-0 top-[104px] flex items-start w-full px-[230px] mt-5">
          <div className="w-1/3 flex flex-col justify-center">
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
          <div className="w-1/3 flex flex-col justify-center mr-5">
            <div className="text-2xl font-bold">Address</div>
            <div className="mt-10 flex items-start">
              <img
                src="/assets/icons/location.png"
                alt="facebook"
                className="w-10 h-10 object-cover mr-6"
              />
              <div className="text-sm">
                <div>
                  Valletta Buildings, South Street, Valletta - VLT 1103 Malta,
                  US
                </div>
                <div className="mt-3">
                  20 Phan Dang Luu street, Hai Chau District, Danang city,
                  Vietnam
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center">
              <img
                src="/assets/icons/mobile.png"
                alt="facebook"
                className="w-10 h-10 object-cover mr-6"
              />
              <div className="text-sm">
                <div>(+1) 555-0108-000 or (+236) 555-0108</div>
              </div>
            </div>
          </div>

          <div className="w-1/3 flex flex-col justify-start ml-5">
            <div className="text-2xl font-bold">Subscribe</div>
            <div className="mt-10 text-sm">
              Subscribe to our newsletter and be the first to know about our
              updates
            </div>

            <div className="relative w-full max-w-xl z-10 mt-3">
              <div className="relative flex items-center bg-transparent border border-[#FFFFFF] p-3 rounded-2xl shadow-xl">
                <input
                  type="email"
                  placeholder="Enter your email"
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
