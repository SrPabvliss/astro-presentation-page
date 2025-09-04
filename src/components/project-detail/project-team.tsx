"use client";

import { motion } from "@/components/motion";
import type { ProjectRole, TeamMember } from "@/types/project-detail.interface";
import { Users, Medal, CheckCircle2, Star } from "lucide-react";

export default function ProjectTeam({ 
  role, 
  team,
  id,
}: { 
  role: ProjectRole; 
  team: TeamMember[];
  id: string;
}) {
  return (
    <section id={id} className="container mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Team & Role
      </motion.h2>
      
      {/* My Role Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10 mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-full bg-blue-500/20">
            <Medal className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">{role.title}</h3>
        </div>
        
        <p className="text-white/80 leading-relaxed mb-8 max-w-4xl">
          {role.teamContext}
        </p>
        
        {/* Responsibilities */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              <h4 className="text-xl font-semibold text-white">Responsibilities</h4>
            </div>
            
            <ul className="space-y-3">
              {role.responsibilities.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  </span>
                  <p className="text-white/80">{item}</p>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Key Achievements */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-blue-400" />
              <h4 className="text-xl font-semibold text-white">Key Achievements</h4>
            </div>
            
            <ul className="space-y-3">
              {role.keyAchievements.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  </span>
                  <p className="text-white/80">{item}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
      
      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-full bg-blue-500/20">
            <Users className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">Team Members</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-zinc-800/70 rounded-xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              {/* Member Image */}
              <div className="relative w-full h-56 overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image as string}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 pt-2"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-blue-900/20">
                    <Users className="w-16 h-16 text-white/30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
              </div>
              
              {/* Member Info */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                <p className="text-blue-400 mb-4 text-sm">{member.role}</p>
                
                <ul className="space-y-2">
                  {member.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                      <span className="text-white/70">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}