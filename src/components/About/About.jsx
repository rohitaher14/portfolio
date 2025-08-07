import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const services = [
    {
      title: "DESIGN",
      description: "I can design the site based on your needs and suggestions. I can also design the site from scratch to production."
    },
    {
      title: "DEVELOPMENT", 
      description: "I can develop the site based on your needs and suggestions. I can also develop the site from scratch to production."
    },
    {
      title: "MAINTENANCE",
      description: "I can maintain the site based on your needs and suggestions. I can also maintain the site from scratch to production."
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>ABOUT ME</h2>
        </motion.div>

        <motion.div 
          className="about-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            Hello! I'm a front-end developer with a passion for creating beautiful, 
            functional, and user-centered digital experiences. With expertise in modern 
            web technologies, I bring ideas to life through clean code and thoughtful design.
          </p>
        </motion.div>

        <div className="about-explore">
          <motion.button
            className="explore-btn"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            EXPLORE
          </motion.button>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
