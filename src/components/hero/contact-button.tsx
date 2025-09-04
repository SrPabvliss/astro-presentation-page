import { motion } from "@/components/motion";

const ContactButton = () => {
	return (
		<motion.a
			href="/#contact"
			className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
		>
			Contact Me
		</motion.a>
	);
};

export default ContactButton; 