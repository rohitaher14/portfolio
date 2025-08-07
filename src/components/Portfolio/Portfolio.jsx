import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const projects = [
    {
      id: 1,
      title: "eatsome.",
      subtitle: "Restaurant Booking & Online Ordering App",
      category: "CODED",
      type: "DESIGNED",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Modern Dashboard",
      subtitle: "Analytics & Data Visualization",
      category: "CODED",
      type: "DESIGNED",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      subtitle: "Full-Stack Shopping Experience",
      category: "CODED",
      type: "DESIGNED",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      subtitle: "Personal Branding & Showcase",
      category: "DESIGNED",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "Mobile App UI",
      subtitle: "Social Media Application",
      category: "DESIGNED",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Brand Identity",
      subtitle: "Logo & Visual Identity Design",
      category: "DESIGNED",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  const filters = ['ALL', 'CODED', 'DESIGNED'];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-hero">
        <div className="portfolio-hero-content">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            PORTFOLIO
          </motion.h2>
        </div>
      </div>

      <div className="container">
        <motion.div 
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={activeFilter}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="portfolio-item"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                  </div>
                  <div className="portfolio-actions">
                    <a href={project.demoUrl} className="btn-demo">DEMO</a>
                    {project.codeUrl && (
                      <a href={project.codeUrl} className="btn-code">MORE</a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="portfolio-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>And many more to come!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
