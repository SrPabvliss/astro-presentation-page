"use client";

import { motion } from "@/components/motion";
import ContactInfo from "@/components/contact/ContactInfo";
import SocialLinks from "@/components/contact/SocialLinks";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			className="min-h-screen bg-zinc-900 py-12 px-4 text-gray-100"
			id="contact"
		>
			<div className="container mx-auto max-w-4xl">
				{/* Header with navigation */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5 }}
					className="mb-12"
				>
					<div className="flex items-center gap-2">
						<span className="text-blue-500 font-medium text-lg">/</span>
						<span className="text-white font-medium text-lg">CONTACT</span>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-3 mt-4">
						Contact
					</h1>
					<motion.div
						initial={{ width: 0 }}
						whileInView={{ width: "120px" }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="h-1 bg-blue-500 mb-4"
					/>
					<p className="text-xl text-gray-400 max-w-2xl">
						Do you have a project in mind? Let's talk! I'm here to help you make it happen.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="space-y-8">
						<ContactInfo />
						<SocialLinks />
					</div>
					<ContactForm />
				</div>
			</div>
		</motion.div>
	);
};

export default Contact;
