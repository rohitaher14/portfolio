import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
  FaGitAlt, 
  FaFigma, 
  FaNodeJs 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiMysql, 
  // SiSass, 
  SiPython,
  SiPostgresql,
  // SiCplusplus, 
  // SiC 
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillsData = {
    "USING NOW": [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      // { name: "SASS", icon: SiSass, color: "#CC6699" },
      {name: "Postgresql", icon: SiPostgresql, color: "#3178C6"},
      {name: "PYTHON", icon: SiPython, color: "#3178C6"},
      { name: "JAVASCRIPT", icon: FaJs, color: "#F7DF1E" },
      { name: "REACT", icon: FaReact, color: "#61DAFB" },
      { name: "BOOTSTRAP", icon: FaBootstrap, color: "#7952B3" },
      { name: "GIT", icon: FaGitAlt, color: "#F05032" },
      { name: "FIGMA", icon: FaFigma, color: "#F24E1E" }
    ],
    "LEARNING": [
      { name: "NODE.JS", icon: FaNodeJs, color: "#339933" },
      { name: "MYSQL", icon: SiMysql, color: "#4479A1" },
      { name: "MONGODB", icon: SiMongodb, color: "#47A248" },
      { name: "TYPESCRIPT", icon: SiTypescript, color: "#3178C6" }
    ],
    // "OTHER SKILLS": [
      // { name: "ANGIELSKI C1/C2", icon: "🇬🇧", color: "#000" },
      // { name: "HISZPAŃSKI B1/B2", icon: "🇪🇸", color: "#000" },
      // { name: "C++", icon: SiCplusplus, color: "#00599C" },
      // { name: "C", icon: SiC, color: "#A8B9CC" }
    // ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>SKILLS</h2>
        </motion.div>

        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <div key={category} className="skills-category">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {category}:
            </motion.h3>
            
            <motion.div 
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    transition: { duration: 0.2 } 
                  }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {typeof skill.icon === 'string' ? (
                      <span className="flag-icon">{skill.icon}</span>
                    ) : (
                      <skill.icon />
                    )}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
