import React from "react";
import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col font-sans", className)}>
      <div className="inline-flex items-center ">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl tracking-wide">{title}</h3>
      </div>
      <p className="text-sm text-white/60 mt-2">{description}</p>
    </div>
  );
};

export default CardHeader;
