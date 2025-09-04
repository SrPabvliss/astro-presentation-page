import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
	MAIN_NAV_ITEMS,
	PROJECT_DETAIL_NAV_ITEMS,
	PROJECTS_PAGE_NAV_ITEMS,
	ABOUT_PAGE_NAV_ITEMS,
	LEARNING_PROJECT_DETAIL_NAV_ITEMS,
} from "@/constants/nav-items";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/types/nav.interface";

const FloatingNavbar = () => {
	const [activeSection, setActiveSection] = useState<string>("home");
	const [isOpen, setIsOpen] = useState(false);
	const [currentPath, setCurrentPath] = useState<string>("/");
	const [currentNavItems, setCurrentNavItems] = useState<NavItem[]>([
		...MAIN_NAV_ITEMS,
	]);
	const observerRef = useRef<IntersectionObserver | null>(null);
	const navRef = useRef<HTMLDivElement | null>(null);
	const [clickedSection, setClickedSection] = useState<string | null>(null);
	const [isClicking, setIsClicking] = useState(false);

	useEffect(() => {
		setCurrentPath(window.location.pathname);
	}, []);

	const isLearningProjectDetailPage = currentPath.startsWith("/projects/learning/");
	const isProjectDetailPage = currentPath.match(/^\/projects\/.+/) && !isLearningProjectDetailPage;
	const isProjectsPage = currentPath === "/projects";
	const isAboutPage = currentPath === "/about";

	useEffect(() => {
		if (typeof window === "undefined") return;

		if (isLearningProjectDetailPage) {
			setCurrentNavItems(LEARNING_PROJECT_DETAIL_NAV_ITEMS);
		} else if (isProjectDetailPage) {
			setCurrentNavItems(PROJECT_DETAIL_NAV_ITEMS);
		} else if (isProjectsPage) {
			setCurrentNavItems(PROJECTS_PAGE_NAV_ITEMS);
		} else if (isAboutPage) {
			setCurrentNavItems(ABOUT_PAGE_NAV_ITEMS);
		} else {
			setCurrentNavItems([...MAIN_NAV_ITEMS]);
			if (currentPath.startsWith("/projects")) {
				setActiveSection("projects");
				return;
			}
			setActiveSection("home");
		}
	}, [currentPath, isLearningProjectDetailPage, isProjectDetailPage, isProjectsPage, isAboutPage]);

	useEffect(() => {
		if (typeof window === "undefined") return;
  
		const timeout = setTimeout(() => {
			const handleObserve = (entries: IntersectionObserverEntry[]) => {
				if (isClicking) return;
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
  
				if (visible.length > 0) {
					setActiveSection(visible[0].target.id);
				}
			};
  
			const options = isAboutPage
				? {
						root: null,
						rootMargin: "0px 0px -52% 0px",
						threshold: 0.1,
				  }
				: {
						root: null,
						rootMargin: "0px 0px -60% 0px",
						threshold: 0.1,
				  };
  
			const observer = new window.IntersectionObserver(handleObserve, options);
			observerRef.current = observer;
  
			currentNavItems.forEach((item) => {
				const section = document.getElementById(item.id);
				if (section) observer.observe(section);
			});
		}, 100); // Delay para asegurar que las secciones estén renderizadas
  
		const handleScroll = () => {
			if (isClicking) {
				setIsClicking(false);
				setClickedSection(null);
			}
		};
		window.addEventListener("scroll", handleScroll);
  
		return () => {
			clearTimeout(timeout);
			observerRef.current?.disconnect();
			window.removeEventListener("scroll", handleScroll);
		};
	}, [currentNavItems, isProjectDetailPage, isProjectsPage, isAboutPage, isClicking]);
  

	useEffect(() => {
		if (!isOpen) return;
		function handleClickOutside(event: MouseEvent) {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen]);

	const handleNavClick = (id: string) => (e: React.MouseEvent) => {
		setIsOpen(false);
		setActiveSection(id);
		setClickedSection(id);
		setIsClicking(true);
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

		setTimeout(() => {
			setIsClicking(false);
			setClickedSection(null);
		}, 1200);
	};

	const getLinkHref = (item: NavItem) => {
		if (isLearningProjectDetailPage) {
			return `#${item.id}`;
		}
		if (isProjectDetailPage || isProjectsPage || isAboutPage) {
			return item.href;
		}
		if (currentPath !== "/") {
			if (item.id === activeSection) {
				if (currentPath.startsWith("/projects")) {
					return currentPath;
				}
				return item.href;
			}
			return `/#${item.id}`;
		}
		return item.href;
	};

	const navClass =
		"fixed top-6 right-6 z-50 flex flex-col items-center gap-1.5 bg-gradient-to-b from-zinc-900/95 to-zinc-800/95 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)] p-2 border border-zinc-700/60 backdrop-blur-2xl w-40";
	const navListClass = "relative flex flex-col gap-1.5 w-full mt-3";
	const navItemClass = "relative flex items-center justify-center h-8 w-full";
	const linkClass = (active: boolean) =>
		`relative z-10 flex items-center justify-start w-full h-7 px-2.5 text-sm font-medium transition-all duration-200 ${
			active ? "text-zinc-900" : "text-zinc-200 hover:text-white hover:translate-x-0.5"
		}`;
	const highlightClass =
		"absolute left-0 -translate-y-[100%] w-[95%] h-7 rounded-full bg-gradient-to-r from-white/95 to-white/90 shadow-[0_4px_12px_rgba(255,255,255,0.3)] z-0";

	return (
		<>
			<nav className={`hidden sm:flex ${navClass}`}>
				<div className={navListClass}>
					{currentNavItems.map((item) => (
						<div key={item.id} className={navItemClass}>
							<AnimatePresence>
								{activeSection === item.id && (
									<motion.div
										layoutId="navbar-highlight"
										className={highlightClass}
										initial={{ scale: 0.7, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										exit={{ scale: 0.7, opacity: 0 }}
										transition={{ type: "spring", stiffness: 400, damping: 30 }}
									/>
								)}
							</AnimatePresence>
							<a
								href={getLinkHref(item)}
								onClick={handleNavClick(item.id)}
								className={linkClass(activeSection === item.id)}
								style={{ letterSpacing: "0.04em" }}
							>
								{item.name}
							</a>
						</div>
					))}
				</div>
			</nav>

			<button
				className="sm:hidden fixed top-6 right-6 z-50 w-11 h-11 rounded-full bg-zinc-900/70 border border-zinc-700/40 shadow-xl flex items-center justify-center backdrop-blur-lg transition-all hover:bg-zinc-800/80"
				onClick={() => setIsOpen(true)}
				aria-label="Abrir menú de navegación"
				style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.25)" }}
			>
				<Menu className="w-6 h-6 text-white" />
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.nav
						initial={{ opacity: 0, scale: 0.5, y: -30, x: 60 }}
						animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
						exit={{ opacity: 0, scale: 0.5, y: -30, x: 60 }}
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
						className={`sm:hidden ${navClass}`}
						style={{ minHeight: "200px", maxWidth: "90vw" }}
						ref={navRef}
					>
						<div className={navListClass}>
							{currentNavItems.map((item) => (
								<div key={item.id} className={navItemClass}>
									<AnimatePresence>
										{activeSection === item.id && (
											<motion.div
												layoutId="navbar-highlight-mobile"
												className={highlightClass}
												initial={{ scale: 0.7, opacity: 0 }}
												animate={{ scale: 1, opacity: 1 }}
												exit={{ scale: 0.7, opacity: 0 }}
												transition={{
													type: "spring",
													stiffness: 400,
													damping: 30,
												}}
											/>
										)}
									</AnimatePresence>
									<a
										href={getLinkHref(item)}
										onClick={handleNavClick(item.id)}
										className={linkClass(activeSection === item.id)}
										style={{ letterSpacing: "0.04em" }}
									>
										{item.name}
									</a>
								</div>
							))}
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</>
	);
};

export default FloatingNavbar; 