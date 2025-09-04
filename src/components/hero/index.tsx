"use client";
import { motion} from "@/components/motion"
import { CLOUDINARY_IMAGES } from "@/constants/cloudinary";
import SocialLinks from "./social-links";
import WorkSection from "./work-section";
import ContactButton from "./contact-button";

const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="w-full flex flex-col justify-center items-center bg-zinc-800 py-16 min-h-screen"
			id="home"
		>
			<div className="flex flex-col items-center gap-20 container mx-auto px-4">
				<div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center">
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[650px] lg:h-[450px] group"
					>
						<div className="absolute -inset-4 rounded-3xl blur-3xl bg-blue-600/30 transition-colors" />
						<div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 overflow-hidden flex items-center justify-center">
							<img
								src={CLOUDINARY_IMAGES.PROFILE_PICTURE}
								alt="Hero"
								width={600}
								height={600}
								className="pt-10 rounded-3xl object-cover hover:scale-102 transition-transform duration-300"
							/>	
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="flex flex-col gap-6"
					>
						<div className="w-56 h-3 bg-blue-500" />
						<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
							I&apos;m Pablo Villacrés
							<br />
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									delay: 0.5,
									duration: 1.6,
									ease: [0.4, 0, 0.2, 1],
								}}
								className="relative bg-gradient-to-r from-blue-500 via-purple-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
							>
								Software Developer
							</motion.span>
						</h1>
						<p className="text-gray-400 text-lg md:text-xl ">
							Experience in web and mobile application development. Specialized
							in frontend, with knowledge in backend and mobile development.
						</p>
						<SocialLinks />
						<div className="flex flex-wrap gap-4">
							<ContactButton />
						</div>
					</motion.div>
				</div>
				<WorkSection />
			</div>
		</motion.div>
	);
};

export default Hero;
