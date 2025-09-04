import { motion } from "@/components/motion";
import socialLinks from "@/constants/social-links";

const SocialLinks = () => (
  <div className="bg-zinc-800/50 rounded-xl p-6 border border-white/5">
    <h2 className="text-2xl font-semibold mb-6">Social Networks</h2>
    <div className="grid grid-cols-2 gap-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-white/5 hover:border-blue-500/50 transition-colors group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
            <link.icon className="w-5 h-5 text-blue-500" />
          </div>
          <span className="text-gray-300 group-hover:text-blue-500 transition-colors">
            {link.href.includes('github.com') ? 'GitHub' :
              link.href.includes('linkedin.com') ? 'LinkedIn' :
              link.href.includes('instagram.com') ? 'Instagram' :
              link.href.includes('facebook.com') ? 'Facebook' : 'Social'}
          </span>
        </motion.a>
      ))}
    </div>
  </div>
);

export default SocialLinks; 