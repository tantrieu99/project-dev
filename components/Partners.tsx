import PartnerSlider from "./element/SliderPartners";

export default function Partners() {
  return (
    <div>
      <div className="font-playfair 2xl:text-6xl text-[40px] font-black text-center">
        Our Partners
      </div>
      <div className="2xl:mt-20 mt-10">
        <PartnerSlider />
      </div>
    </div>
  );
}
