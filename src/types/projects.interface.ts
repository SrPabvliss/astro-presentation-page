import type { ReactNode } from "react";

export interface Company {
	name: string;
	icon: ReactNode;
}

export interface ProjectProps {
	id: string;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	company: {
		name: string;
		icon: ReactNode;
	};
	featured?: boolean;
}
