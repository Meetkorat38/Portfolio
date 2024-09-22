import memojiComputerImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import GrainImage from "@/assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkalIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48  lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute -z-30 inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="opacity-10"
          style={{
            backgroundImage: `url(${GrainImage.src})`,
          }}
        />
        {/* Rings */}
        <HeroRing size={620} />
        <HeroRing size={820} />
        <HeroRing size={1020} />
        <HeroRing size={1220} />
        <HeroRing size={1500} />

        {/* Star, icons and rounds */}
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-24 text-secondary" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-secondary" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={100}>
          <StarIcon className="size-8 text-secondary" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-15}>
          <SparkalIcon className="size-8 text-tercery" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkalIcon className="size-5 text-tercery" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={179}>
          <SparkalIcon className="size-10 text-tercery" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkalIcon className="size-14 text-tercery" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 rounded-full bg-tercery" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-45}>
          <div className="size-2 rounded-full bg-tercery" />
        </HeroOrbit>
        <HeroOrbit size={660} rotation={-8}>
          <div className="size-2 rounded-full bg-tercery" />
        </HeroOrbit>
      </div>
      {/* Main content */}
      <div className="container font-sans">
        <div className="flex flex-col items-center">
          <Image
            className="size-[100px]"
            src={memojiComputerImage}
            alt="computer image"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="dot size-2.5 rounded-full bg-green-500 relative">
              <div className="absolute bg-green-500 inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm ">Available For New Opportunity</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif  text-4xl md:text-5xl lg:text-6xl text-center mt-8 tracking-wide">
            Korat Meet
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Creative developer focused on building user-friendly, high-quality
            applications that leave a lasting impression.{" "}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold ">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <a
            href="https://www.linkedin.com/in/meet-korat-335632245/"
            target="_blank"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className=" font-semibold">Let&apos;s connect</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const HeroRing = ({ size }: { size: number }) => {
  return (
    <div
      style={{
        height: `${size}px`,
        width: `${size}px`,
      }}
      className="absolute inset-0 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
  );
};
