import React from "react";

const TextSection = ({
  eyebrow,
  text,
  description,
}: {
  eyebrow: string;
  text: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-400 to-purple-500 text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>
      <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-center mt-6">
        {text}
      </h1>
      <p className="text-center md:text-lg max-w-md mx-auto lg:text-xl text-primary/60 mt-4">
        {description}
      </p>
    </>
  );
};

export default TextSection;
