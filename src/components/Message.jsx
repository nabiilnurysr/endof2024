import React from "react";
import { picture } from "../assets";
import { us1 } from "../assets";
import { cat3 } from "../assets";
import { cat1 } from "../assets";
import Carousel from "./Carousel";
import { ImageCard } from "./ImageCard";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    {
      Image: cat3,
      title: "Happy to be With You",
      description:
        "Neyo, you are truly incredible. If the stars were aligned, I’d be so happy to be with you. Even though they aren’t, I’m grateful for your kindness, support, and having you as part of my life.",
    },
    {
      Image: us1,
      title: "Thank you, my loml",
      description:
        "This picture captures one of our most beautiful moments together when everything felt so perfect. Thank you for being an incredible part of my life. You are the greatest love of my life.❤️",
    },
    {
      Image: cat1,
      title: "I Will Always Love You",
      description:
        "I told you a long time ago that I would always love you and I would always take you on your terms. And that remains true and will always remain true. Whenever u need me, i'll be there",
    },
  ];
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          Our Messages
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

export default Message;
