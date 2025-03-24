import React from 'react';
import { motion } from 'framer-motion';

import mothball from "../assets/mothball1.jpg";
import ProjectVideo1 from "../assets/mothball2.mp4";
import ProjectVideo2 from "../assets/mothball3.mp4";
import ProjectVideo3 from "../assets/mothball4.mp4";

const Projects = () => {
  const projects = [
    {
      type: 'image',
      title: "Naphthalene Balls",
      description: "An image showcasing the packaging and presentation of naphthalene balls, highlighting their quality and branding.",
      media: mothball
    },
    {
      type: 'video',
      title: "Naphthalene Balls Production",
      description: "A video demonstrating the production process of naphthalene balls, from raw materials to final packaging.",
      media: ProjectVideo1
    },
    {
      type: 'video',
      title: "Quality Control",
      description: "A video detailing the quality control measures in place to ensure the highest standards for naphthalene balls.",
      media: ProjectVideo2
    },
    {
      type: 'video',
      title: "Manufacturing Machinery",
      description: "A video tour of the machinery and technology used in the manufacturing of naphthalene balls.",
      media: ProjectVideo3
    }
  ];

  return (
    <section id="work" className="w-full py-20 bg-primary">
      <div className="max-w-[1240px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-textPrimary mb-4">My Work</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 duration-300"
            >
              {/* Project Media */}
              <div className="relative group h-64 overflow-hidden"> {/* Increased height */}
                {project.type === 'image' ? (
                  <img
                    src={project.media}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/placeholder.png'; // Add a placeholder image
                      e.target.onerror = null;
                    }}
                  />
                ) : (
                  <video
                    src={project.media}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    autoPlay
                    loop
                    muted
                  />
                )}
              </div>

              {/* Project Info */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-textPrimary mb-2">{project.title}</h3>
                <p className="text-textSecondary mb-2 text-sm">{project.description}</p>
                
                {/* Technologies */}
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;