import React from "react";
import { picture } from "../assets";

import { neyo1 } from "../assets";
import { neyo2 } from "../assets";
import { neyo4 } from "../assets";
import { neyo5 } from "../assets";

import { cat2 } from "../assets";
import { cat4 } from "../assets";
import { cat5 } from "../assets";
import { cat6 } from "../assets";

import Carousel from "./Carousel";
import { ImageCard } from "./ImageCard";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    {
      Image: neyo1,
      title: "The World of Neyo",
      description:
        "Step into a world dedicated to Neyo, my precious Kanaya Jasmine Putri. She is my muse, my love, and the one who makes life extraordinary.",
    },
    {
      Image: cat2,
      title: "Adoring Neyo",
      description:
        "A heartfelt dedication to Neyo, the nickname that embodies Kanaya’s charm, love for cats, and the beauty she brings into my life.",
    },
    {
      Image: neyo2,
      title: "Neyo : My Home",
      description:
        "Neyo, my Kanaya, is more than a name; she is my heart's home. This is a space where her magic and my endless love for her shine.",
    },
    {
      Image: cat4,
      title: "Neyo : My Lovely Kitten",
      description:
        "Neyo, my Kanaya, is as adorable and playful as a kitten. Her charm and love for cats remind me of the joy and warmth she brings into my life every day.",
    },
    {
      Image: neyo4,
      title: "Dreaming of Neyo",
      description:
        "Neyo is not just a dream; she is my reality. A place where her kindness, beauty, and our shared memories live forever.",
    },
    {
      Image: cat5,
      title: "Neyo, My Guiding Star",
      description:
        "Neyo lights my path with her love, her smile, and her essence. This is my tribute to her—the one who makes every day brighter.",
    },
    {
      Image: neyo5,
      title: "A Universe for Neyo",
      description:
        "This universe belongs to Neyo, my Kanaya Jasmine Putri. A special corner of love dedicated to her elegance and passion for life.",
    },
    {
      Image: cat6,
      title: "For Neyo, With Infinite Love",
      description:
        "Every word, every thought, and every heartbeat is for Neyo. This is my gift to her, a space filled with infinite love and admiration.",
    },
  ];
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          Neyo Cute
        </h1>
        <Carousel>
          {pictures.map(({ Image, title, description, index }) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate("/recap")}
          >
            <ArrowLeft /> Previous page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Picture;
