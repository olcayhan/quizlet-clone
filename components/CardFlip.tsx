import { useState } from "react";

interface CardFlipProps {
  term?: string;
  definition?: string;
}

const CardFlip: React.FC<CardFlipProps> = ({ term, definition }) => {
  const [isFront, setFront] = useState(true);

  return (
    <div
      onClick={() => setFront(!isFront)}
      className="
          py-48 
          rounded-lg 
          bg-blue-950 
          mt-5 
          relative 
          shadow-xl 
          transition 
          duration-300 
          cursor-pointer
        "
      style={{
        transformStyle: "preserve-3d",
        transform: isFront ? "rotateX(180deg)" : "rotateX(0deg)",
      }}
    >
      <div
        className="absolute  w-full h-full pointer-events-none inset-0"
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="flex flex-col h-full justify-center items-center">
          <p className="text-white font-semibold text-3xl">{term}</p>
        </div>
      </div>
      <div
        className="absolute w-full h-full pointer-events-none inset-0"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateX(180deg)",
        }}
      >
        <div className="flex flex-col h-full justify-center items-center">
          <p className="text-white font-semibold text-3xl">{definition}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
