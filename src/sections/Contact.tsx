import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { IoMail } from "react-icons/io5";


export const ContactSection = () => {
  return (
    <section id={"contact"} className="py-16 pt-12 font-sans ">
      <div className="container">
        <div className="text-start py-8 px-10  bg-gradient-to-r from-emerald-400 to-purple-500 text-gray-950 rounded-3xl">
          <div className="flex flex-col md:flex-row gap-5 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Lets Create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                I am always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>
            </div>
            <div className="z-20 flex flex-col lg:gap-4">
              <a href="https://www.linkedin.com/in/meet-korat-335632245/" target="_blank" className="text-white cursor-pointer  bg-gray-900 inline-flex items-center px-6 h-12 md:h-14 rounded-xl mt-5 md:mt-0 gap-2 w-max">
                <span className="font-semibold lg:text-lg">Get In Touch</span>
                <CiLinkedin className="size-6 lg:size-8 text-blue-500" />
              </a>
              <a href="mailto:meetkorat903@gmail.com" target="_blank" className="text-white cursor-pointer  bg-gray-900 inline-flex items-center px-6 h-12 md:h-14 rounded-xl mt-5 md:mt-0 gap-3 w-max">
                <span className="font-semibold lg:text-lg">Contact Me</span>
                <Image src={"/gmail.svg"} alt="Gmail" height={5} width={5} className="size-6 lg:size-7 " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
``