import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Building } from 'lucide-react';
import { experienceData } from '../data/static';

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {experienceData.title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{experienceData.title.split(' ')[1]}</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-12"
          >
            {experienceData.experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-slate-900"></div>

                {/* Content */}
                <div className="ml-16 flex-1">
                  <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-purple-400/30 transition-all duration-300 backdrop-blur-sm">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Building size={20} className="text-purple-400" />
                          <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                        </div>
                        <h4 className="text-xl text-purple-400 font-semibold">{exp.position}</h4>
                      </div>
                      <div className="flex flex-col lg:items-end space-y-2 mt-2 lg:mt-0">
                        <div className="flex items-center space-x-2 text-gray-300">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {exp.type}
                      </span>
                    </div>

                    <ul className="space-y-2 text-gray-300">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="flex items-baseline space-x-3">
                          <span className="text-purple-400 shrink-0">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;