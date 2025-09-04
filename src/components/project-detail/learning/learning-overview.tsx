import { motion } from "@/components/motion";

export interface LearningOverviewProps {
  id: string;
  overview: {
    context: string;
    objective: string;
    highlights?: string[];
  };
}

export default function LearningOverview({ id, overview }: LearningOverviewProps) {
  return (
    <section id={id} className="container mx-auto px-4 mt-12">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
       Project Overview
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-4 mb-2">Context</h3>
          <div className="bg-zinc-800/50 rounded-xl p-6 border border-white/5">
            <p className="text-white/90 text-lg">{overview.context}</p>
          </div>
          <h3 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-4 mb-2 mt-8">Objective</h3>
          <div className="bg-zinc-800/50 rounded-xl p-6 border border-white/5">
            <p className="text-white/90 text-lg">{overview.objective}</p>
          </div>
        </motion.div>
        {overview.highlights && overview.highlights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-4 mb-2">Highlights</h3>
            <div className="bg-zinc-800/50 rounded-xl p-6 border border-white/5">
              <ul className="space-y-4">
                {overview.highlights.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    </span>
                    <p className="text-white/90 leading-relaxed">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 