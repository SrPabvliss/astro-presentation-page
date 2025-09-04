import type { NavItem } from "@/types/nav.interface";

export const MAIN_NAV_ITEMS: readonly NavItem[] = [
	{ id: "home", name: "Home", href: "#home" },
	{ id: "skills", name: "Skills", href: "#skills" },
	{ id: "projects", name: "Projects", href: "#projects" },
	{ id: "contact", name: "Contact", href: "#contact" },
] as const;

export const PROJECT_DETAIL_NAV_ITEMS: NavItem[] = [
	{ id: "overview", name: "Overview", href: "#overview" },
	{ id: "features", name: "Features", href: "#features" },
	{ id: "stack", name: "Stack", href: "#stack" },
	{ id: "team", name: "My Role", href: "#team" },
	{ id: "challenges", name: "Challenges", href: "#challenges" },
	{ id: "learnings", name: "Learnings", href: "#learnings" },
	{ id: "gallery", name: "Gallery", href: "#gallery" },
];

export const PROJECTS_PAGE_NAV_ITEMS: NavItem[] = [
	{ id: "featured-projects", name: "Featured", href: "#featured-projects" },
	{ id: "learning-projects", name: "Learning", href: "#learning-projects" },
];

export const ABOUT_PAGE_NAV_ITEMS: NavItem[] = [
	{ id: "journey", name: "My Journey", href: "#journey" },
	{ id: "work-style", name: "Work Style", href: "#work-style" },
	{ id: "beyond-code", name: "Beyond Code", href: "#beyond-code" },
];

export const LEARNING_PROJECT_DETAIL_NAV_ITEMS: NavItem[] = [
	{ id: "overview", name: "Overview", href: "#overview" },
	{ id: "stack", name: "Stack", href: "#stack" },
	{ id: "gallery", name: "Gallery", href: "#gallery" },
];
