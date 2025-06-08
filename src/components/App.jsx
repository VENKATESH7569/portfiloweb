import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const Input = (props) => (
  <input
    {...props}
    className={
      'w-full p-3 rounded-lg bg-[#1E1E2F] border border-[#33334d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ' +
      props.className
    }
  />
);

const Textarea = (props) => (
  <textarea
    {...props}
    className={
      'w-full p-3 rounded-lg bg-[#1E1E2F] border border-[#33334d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ' +
      props.className
    }
  />
);

const Button = (props) => (
  <button
    {...props}
    className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg'
  />
);

const Card = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className='bg-[#2A2A3B] bg-opacity-70 rounded-2xl p-5 shadow-xl backdrop-blur-md transition-all'
  >
    {children}
  </motion.div>
);

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'service_w198aki';
    const templateID = 'template_28t9loq';
    const publicKey = 'DNwe7dmhgGuMLAaZV';

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('Failed to send message. Please try again later.');
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <main className='bg-[#121212] text-white min-h-screen font-sans px-6 py-10 md:px-20'>
      <section className='mb-12 text-center'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-5xl font-extrabold text-purple-500 mb-2'
        >
          Gadige Venkatesh
        </motion.h1>
        <p className='text-gray-400 text-lg'>Data Science Engineer | Web Developer</p>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-16'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-2xl font-semibold mb-4'>About Me</h2>
          <p className='text-gray-300'>
            I am a Data Science Engineer with a strong foundation in statistics, machine learning, and data analysis.
            I combine technical expertise with web development skills to build intelligent, user-friendly applications
            that solve real-world problems.
          </p>
        </motion.div>

        <motion.img
          src='/images/dp.jpg'
          alt='Profile'
          className='rounded-full shadow-lg w-60 h-60 object-cover mx-auto'
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
      </section>

      <section className='mb-16'>
        <h2 className='text-2xl font-semibold mb-6'>Projects & Case Studies</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {[
            {
              title: 'Crop Recommendation System',
              desc: 'Predicts the best crop based on soil and climate inputs using ML.',
              img: '/images/Crop.jpg',
              link: 'https://github.com/VENKATESH7569/Crop-recommendation-system',
            },
            {
              title: 'House Price Prediction',
              desc: 'Predicts house prices based on features using regression models.',
              img: '/images/House.jpg',
              link: 'https://github.com/VENKATESH7569/HOUSE-PRICE-PREDCTION',
            },
            {
              title: 'Email Spam Filtering',
              desc: 'Classifies emails as spam or not using NLP and ML techniques.',
              img: '/images/email_spam.jpg',
              link: 'https://github.com/VENKATESH7569/EMAIL-SPAM-FILTERING',
            },
            {
              title: 'Customer Churn Prediction',
              desc: 'Predicts whether customers will leave a service using classification models.',
              img: '/images/churn_pred.jpg',
              link: 'https://github.com/VENKATESH7569/CHURN-PREDCTION',
            },
          ].map(({ title, desc, img, link }) => (
            <Card key={title}>
              <img src={img} alt={title} className='rounded-lg mb-4 w-full h-48 object-cover' />
              <h3 className='text-xl font-bold mb-2'>{title}</h3>
              <p className='text-gray-300 mb-2'>{desc}</p>
              <a href={link} className='text-purple-400 underline' target='_blank'>View on GitHub</a>
            </Card>
          ))}
        </div>
      </section>

      <section className='mb-16'>
        <h2 className='text-2xl font-semibold mb-2'>Technical Skills</h2>
        <p className='text-gray-300'>Python, R, SQL, Pandas, NumPy, Scikit-learn, TensorFlow, Power BI, React, HTML/CSS, Git, Flask</p>
      </section>

      <section className='mb-16'>
        <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
        <form onSubmit={handleSubmit} className='grid gap-4 max-w-md'>
          <Input name='name' type='text' placeholder='Your Name' value={formData.name} onChange={handleChange} required />
          <Input name='email' type='email' placeholder='Your Email' value={formData.email} onChange={handleChange} required />
          <Textarea name='message' placeholder='Your Message' rows='5' value={formData.message} onChange={handleChange} required />
          <Button type='submit'>Send Message</Button>
        </form>
      </section>

      <footer className='border-t border-gray-700 pt-6 mt-12 text-center text-gray-400'>
        <div className='flex justify-center gap-6 text-xl mb-4'>
          <a href='https://github.com/VENKATESH7569' target='_blank' rel='noreferrer' className='hover:text-white'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/venkatesh-g-92293b292/' target='_blank' rel='noreferrer' className='hover:text-white'><FaLinkedin /></a>
          <a href='https://drive.google.com/file/d/1iJwdQ5H7DP70Y3OI7ZwotQhQDIrWaXzY/view?usp=sharing' target='_blank' rel='noreferrer' className='hover:text-white'><FaFileAlt /></a>
        </div>
        <p>© {new Date().getFullYear()} Gadige Venkatesh. All rights reserved.</p>
      </footer>
    </main>
  );
}
