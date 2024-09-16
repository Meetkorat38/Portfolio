import React from "react";
import GrainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:pointer-events-none after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-6",
        className
      )}
    >
      <div
        style={{
          backgroundImage: `url(${GrainImage.src})`,
        }}
        className="absolute inset-0 opacity-10 -z-10"
      />
      {children}
    </div>
  );
};

export default Card;
