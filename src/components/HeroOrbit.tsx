import React from "react";

const HeroOrbit = ({
  children,
  size,
  rotation,
}: {
  children: React.ReactNode;
  size: number;
  rotation: number;
}) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="animate-spin [animation-duration:30s]">
        <div
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div className="animate-spin [animation-duration:40s]">
            <div
              className=" inline-flex "
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
