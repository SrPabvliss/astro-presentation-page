import type { LucideIcon } from "lucide-react";

export interface WorkCardProps {
	title: string;
	description: string;
	ctaText: string;
	link?: string;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export interface SocialLinkProps {
	href: string;
	icon: LucideIcon;
}
