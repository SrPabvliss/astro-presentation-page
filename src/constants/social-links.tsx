import { Github } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import type { SocialLinkProps } from "@/types/hero.interface";

const socialLinks: SocialLinkProps[] = [
	{
		href: "https://github.com/SrPabvliss",
		icon: Github,
	},
	{
		href: "https://www.linkedin.com/in/pablo-villacres-26a060125/",
		icon: Linkedin,
	},
	{
		href: "https://www.instagram.com/pablo.m.villacres/",
		icon: Instagram,
	},
	{
		href: "https://www.facebook.com/profile.php?id=100008649739009",
		icon: Facebook,
	},
];

export default socialLinks;
