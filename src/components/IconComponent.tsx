import React from "react";

const IconComponent = ({ components }: { components: React.ElementType }) => {
  const Component = components;
  return (
    <>
      <Component className="size-10 fill-[url(#gradient)] " />
      <svg className="size-10 absolute">
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#34d399 " />
          <stop offset="100%" stopColor="#a855f7 " />
        </linearGradient>
      </svg>
    </>
  );
};

export default IconComponent;
