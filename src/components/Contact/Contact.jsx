import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! I will get back to you soon.');
    reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>CONTACT</h2>
        </motion.div>

        <motion.div 
          className="contact-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
          Feel free to reach out for collaborations, questions, or opportunities.
          </p>
        </motion.div>

        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="ENTER YOUR NAME*"
              {...register("name", { 
                required: "Name is required",
                minLength: { value: 2, message: "Name must be at least 2 characters" }
              })}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL*"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <input
              type="tel"
              placeholder="PHONE NUMBER"
              {...register("phone")}
            />
          </div>

          <div className="form-group">
            <textarea
              placeholder="YOUR MESSAGE*"
              rows="6"
              {...register("message", { 
                required: "Message is required",
                minLength: { value: 10, message: "Message must be at least 10 characters" }
              })}
              className={errors.message ? 'error' : ''}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message.message}</span>}
          </div>

          <motion.button 
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SUBMIT
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
