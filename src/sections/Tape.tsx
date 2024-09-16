import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const WORDS = [
  "Responsive",
  "Maintainable",
  "Performance",
  "User Experience",
  "Accessibility",
  "Code Quality",
  "Best Practices",
  "Innovative",
  "Scalable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <section className="py-16  lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-400 to-purple-500 -rotate-3 -mx-1">
        <div className="flex px-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {WORDS.map((word) => (
                  <div
                    key={word}
                    className="inline-flex gap-4 select-none items-center"
                  >
                    <span className="text-gray-900 font-semibold font-sans uppercase gap-4 items-center">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
