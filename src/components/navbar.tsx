import { CodeXml } from "lucide-react";
import{ useState } from "react";
import { motion } from "@/components/motion";
import { MAIN_NAV_ITEMS } from "@/constants/nav-items";

const Navbar = () => {
	const [hoveredLink, setHoveredLink] = useState<string | null>(null);

	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="flex justify-center items-center p-4 mt-6"
		>
			<div className="container mx-auto max-w-5xl px-4">
				<div className="flex justify-between items-center text-white">
					<motion.div
						whileHover={{ scale: 1.02 }}
						className="flex items-center gap-2 cursor-pointer origin-left"
					>
							<CodeXml 
								className="w-10 h-10" 
								color="url(#gradient)" 
							/>
							<svg style={{ height: 0 }}>
								<defs>
									<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
										<stop offset="0%" style={{ stopColor: '#075ee5' }} />
										<stop offset="50%" style={{ stopColor: '#a78bfa' }} />
										<stop offset="100%" style={{ stopColor: '#075ee5' }} />
									</linearGradient>
								</defs>
							</svg>
						</motion.div>
					<div className="flex gap-8 text-xl font-medium">
						{MAIN_NAV_ITEMS.map((item) => (
							<motion.div key={item.id} whileHover={{ scale: 1.1 }}>
								<a
									href={item.href}
									className={`transition-all duration-300 ${
										hoveredLink && hoveredLink !== item.id
											? "opacity-50"
											: "opacity-100"
									}`}
									onMouseEnter={() => setHoveredLink(item.id)}
									onMouseLeave={() => setHoveredLink(null)}
								>
									{item.name}
								</a>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Navbar;
