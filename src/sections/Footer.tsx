import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const FOOTERLINKS = [
  {
    title: "Linkedin",
    link: "#",
  },
  {
    title: "Github",
    link: "#",
  },
  {
    title: "Email",
    link: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="font-sans relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2  bg-emerald-400/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2022. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {FOOTERLINKS.map(({ link, title }) => (
              <a
                key={title}
                href={link}
                className="inline-flex gap-2 items-center"
              >
                <span className="font-semibold">{title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};