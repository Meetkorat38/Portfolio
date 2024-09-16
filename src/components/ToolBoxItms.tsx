import React, { Fragment } from "react";
import IconComponent from "./IconComponent";
import { twMerge } from "tailwind-merge";
import { div } from "framer-motion/client";

const ToolBoxItms = ({
  items,
  className,
  itemWrapperClassName,
}: {
  items: {
    title: string;
    icon: React.ElementType;
  }[];
  className?: string;
  itemWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6  pr-6 ",
          itemWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map(({ title, icon }) => (
              <div
                key={title}
                className="flex items-center gap-4 py-2 px-3 outline outline-white/10 outline-2 rounded-lg"
              >
                <IconComponent components={icon} />
                <span className="font-semibold">{title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolBoxItms;
