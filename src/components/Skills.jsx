import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaProjectDiagram, FaHandshake, FaBullhorn, FaLightbulb, FaBalanceScale, FaChartPie } from 'react-icons/fa';
import backgroundImage from '../assets/skillsImage.jpg'; // Adjust the path as needed

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Business and Managerial Skills
  const skills = [
    { name: "Strategic Planning", icon: <FaChartLine />, level: 90 },
    { name: "Team Leadership", icon: <FaUsers />, level: 85 },
    { name: "Project Management", icon: <FaProjectDiagram />, level: 80 },
    { name: "Negotiation", icon: <FaHandshake />, level: 85 },
    { name: "Marketing Strategy", icon: <FaBullhorn />, level: 75 },
    { name: "Innovation", icon: <FaLightbulb />, level: 80 },
    { name: "Financial Analysis", icon: <FaBalanceScale />, level: 70 },
    { name: "Market Analysis", icon: <FaChartPie />, level: 75 },
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-primary relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div> {/* Overlay */}

      <motion.div 
        className="max-w-[1240px] mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Business Skills</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded mb-4"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-secondary rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-xl text-accent">{skill.icon}</span>
                  <span className="text-white">{skill.name}</span>
                </div>
                <span className="text-textSecondary">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-primary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-accent rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;