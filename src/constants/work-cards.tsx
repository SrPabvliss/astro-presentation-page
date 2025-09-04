import type { WorkCardProps } from "@/types/hero.interface";


const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
  e.preventDefault();
  const target = document.querySelector(link);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

const workCards: WorkCardProps[] = [
	{
		title: "MY WORK",
		description:
			"Take a look at my projects and see how I can help you with your next project.",
		ctaText: "BROWSE PORTFOLIO",
		link: "#projects",
		onClick: (e) => handleScroll(e, "#projects"),
	},
	{
		title: "ABOUT ME",
		description:
			"I'm a software developer with a passion for creating beautiful and functional web and mobile applications.",
		ctaText: "READ MORE",
		link: "/about",
	},
];

export default workCards;
