"use client";

import Card from "./element/Card";

const games = [
  {
    title: "E-Space",
    image: "/assets/images/espace.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Kingland",
    image: "/assets/images/kingland.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "The Last Game",
    image: "/assets/images/thelastgame.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "G-Dragon",
    image: "/assets/images/gdragon.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Pirates",
    image: "/assets/images/pirates.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Witch Party",
    image: "/assets/images/witchparty.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Rocky",
    image: "/assets/images/rocky.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Blue Fire",
    image: "/assets/images/bluefire.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Magic Tree",
    image: "/assets/images/magic-tree.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Aborigines",
    image: "/assets/images/aborigines.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Cinderella",
    image: "/assets/images/cinderella.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Egypt Game",
    image: "/assets/images/egyptgame.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function OurGames() {
  return (
    <div className="fadeInUp">
      <div className="font-playfair 2xl:text-6xl text-[40px] font-black text-center">
        Our Games
      </div>
      <div className="text-sm text-[#757575] text-center mt-6 2xl:block hidden">
        As a pioneer of mobile app gamification, we take pride in originality
        and individuality, providing global players with <br /> state-of-the-art
        games that feature splendid storylines, sensational sound effects and
        magnificent animation that never
        <br /> cease to impress.
      </div>
      <div className="text-sm text-[#757575] text-center mt-6 px-4 2xl:hidden block">
        As a pioneer of mobile app gamification, we take pride in originality
        and individuality, providing global players with state-of-the-art games
        that feature splendid storylines, sensational sound effects and
        magnificent animation that never cease to impress.
      </div>

      <div className="min-h-screen flex items-center justify-center 2xl:mt-20 mt-10">
        <div className="grid 2xl:grid-cols-4 grid-cols-2 2xl:gap-x-10 2xl:gap-y-10 gap-x-5 gap-y-5 auto-rows-auto game-grid">
          {games.map((game, index) => (
            <div key={index} className="game-card">
              <Card {...game} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
