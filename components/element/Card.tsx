import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="relative 2xl:w-[410px] 2xl:h-[560px] w-[164px] h-[268px] rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110 cursor-pointer">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent 2xl:px-8 2xl:py-10 px-2 py-2 flex flex-col justify-end">
        <h3 className="text-white font-bold 2xl:text-5xl text-2xl">{title}</h3>
        <p className="text-white 2xl:text-sm text-xs opacity-75 mt-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;
