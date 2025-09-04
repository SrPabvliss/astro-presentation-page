"use client";

import { motion } from "@/components/motion";
import socialLinks from "@/constants/social-links";

const SocialLinks = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
			className="flex gap-4 mt-4"
		>
			{socialLinks.map((link, index) => (
				<motion.a
					key={index}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.3,
						delay: 0.2 * index,
						ease: "easeOut",
					}}
				>
					<link.icon
						className="text-white hover:text-blue-500 hover:scale-110 transition-transform duration-300"
						size={28}
					/>
				</motion.a>
			))}
		</motion.div>
	);
};

export default SocialLinks;
