import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="relative w-[410px] h-[560px] rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110 cursor-pointer">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent px-8 py-10 flex flex-col justify-end">
        <h3 className="text-white font-bold text-5xl">{title}</h3>
        <p className="text-white text-sm opacity-75 mt-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;
