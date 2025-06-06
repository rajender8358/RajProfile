import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/static';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={skillVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {skillsData.title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{skillsData.title.split(' ')[1]}</span>
          </motion.h2>
          <motion.div
            variants={skillVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={skillVariants}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            {skillsData.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skillsData.skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              whileHover={{ scale: 1.1, y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
              className="group relative bg-slate-800/50 rounded-xl p-3 flex items-center justify-center font-semibold text-white shadow-lg cursor-pointer transition-all duration-300 h-20 border border-slate-700/50 hover:border-purple-400/50"
            >
              <span className="text-center text-sm md:text-base">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-300">{skillsData.tools.title}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.tools.toolList.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/50 w-36 text-center"
              >
                <span className="font-semibold text-gray-200">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Tools */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-300">{skillsData.ai.title}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.ai.toolList.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/50 w-36 text-center"
              >
                <span className="font-semibold text-gray-200">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;