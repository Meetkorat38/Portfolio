"use client";
import Card from "@/components/Card";
import TextSection from "@/components/TextSection";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import BookPage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import SmileMemoji from "@/assets/images/memoji-smile.png";
import { motion } from "framer-motion";
import {
  IoLogoCss3,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import {
  SiDocker,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
} from "react-icons/si";
import CardHeader from "@/components/CardHeader";
import ToolBoxItms from "@/components/ToolBoxItms";
import { useRef } from "react";

const TOOL_BOX = [
  {
    title: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    title: "HTML5",
    icon: IoLogoHtml5,
  },
  {
    title: "CSS3",
    icon: IoLogoCss3,
  },
  {
    title: "React.js",
    icon: IoLogoReact,
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
  },
  {
    title: "Prisma",
    icon: SiPrisma,
  },
  {
    title: "Github",
    icon: IoLogoGithub,
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
  },
  {
    title: "Node JS",
    icon: SiNodedotjs,
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    title: "Express",
    icon: SiExpress,
  },
  {
    title: "Docker",
    icon: SiDocker,
  },
  {
    title: "TurboRepo",
    icon: SiTurborepo,
  },
  {
    title: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    title: "Redis",
    icon: SiRedis,
  },
];

const INTREST = [
  {
    title: "Photography",
    icon: "📸",
    top: "5%",
    left: "5%",
  },
  {
    title: "Devops",
    icon: "♾️",
    top: "45%",
    left: "25%",
  },
  {
    title: "Books",
    icon: "📒",
    top: "75%",
    left: "9%",
  },
  {
    title: "Anime",
    icon: "𝓐𝓷𝓲𝓶𝓮",
    top: "69%",
    left: "58%",
  },
  {
    title: "Games",
    icon: "🎮",
    top: "23%",
    left: "61%",
  },
];

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section id={"about"} className="font-sans py-20 container">
      <div>
        <TextSection
          eyebrow="About Me"
          text="A Glimps Into my World"
          description="Learn more about who I am, what I do, and what inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5  lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />

              <div className="w-40 mx-auto mt-8">
                <Image src={BookPage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My ToolBox"
                description="Explore the Technologis and tools I use to crafting apps"
                className="pr-6 "
              />
              <ToolBoxItms
                items={TOOL_BOX}
                className="px-6 pt-6"
                itemWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItms
                items={TOOL_BOX}
                className="mt-6 "
                itemWrapperClassName="animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond The Code"
                description="Explore My Intrest and Hobbies beyound the code."
                className="p-6"
              />
              <div className="relative flex-1 " ref={containerRef}>
                {INTREST.map(({ title, icon, left, top }) => (
                  <motion.div
                    key={title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-400 bg-purple-500 rounded-full py-1.5 absolute"
                    style={{
                      top,
                      left,
                    }}
                    drag
                    dragConstraints={containerRef}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-gray-950 font-medium">{title}</span>
                    <span>{icon}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                className="object-cover h-full w-full"
                src={mapImage}
                alt="Map Image"
              />
              <div className="absolute bg-gradient-to-r from-emerald-400 to-purple-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image
                  className="size-36 "
                  src={SmileMemoji}
                  alt="smile Image"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
