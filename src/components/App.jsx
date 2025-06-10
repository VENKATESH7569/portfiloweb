import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { title } from 'framer-motion/client';

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
          className='text-5xl font-extrabold text-[#008080] mb-2'
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

      <section className="mb-16">
  <h2 className="text-4xl font-bold text-white mb-10 text-center">
    🚀 Projects & Case Studies
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      {
        title: '🌾 Crop Recommendation System',
        desc: 'Predicts the best crop based on soil and climate inputs using ML.',
        img: '/images/Crop.jpg',
        link: 'https://github.com/VENKATESH7569/Crop-recommendation-system',
      },
      {
        title: '🏠 House Price Prediction',
        desc: 'Predicts house prices based on features using regression models.',
        img: '/images/House.jpg',
        link: 'https://github.com/VENKATESH7569/HOUSE-PRICE-PREDCTION',
      },
      {
        title: '📧 Email Spam Filtering',
        desc: 'Classifies emails as spam or not using NLP and ML techniques.',
        img: '/images/email_spam.jpg',
        link: 'https://github.com/VENKATESH7569/EMAIL-SPAM-FILTERING',
      },
      {
        title: '📉 Customer Churn Prediction',
        desc: 'Predicts whether customers will leave a service using classification models.',
        img: '/images/churn_pred.jpg',
        link: 'https://github.com/VENKATESH7569/CHURN-PREDCTION',
      },
    ].map(({ title, desc, img, link }) => (
      <div
        key={title}
        className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-4"
      >
        <img
          src={img}
          alt={title}
          className="rounded-lg mb-4 w-full h-52 object-cover border border-gray-700 transition-transform duration-300 hover:scale-105 hover:brightness-90"
        />
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-3">{desc}</p>
        <a
          href={link}
          className="text-purple-400 underline font-medium hover:text-purple-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    ))}
  </div>
</section>

<section className="mb-16">
  <h2 className="text-2xl font-semibold mb-12 text-center">My Data Science Journey</h2>
  
  <div className="flex flex-wrap justify-center gap-24"> 

    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
    >
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg mb-4">
        <span className="text-3xl font-bold text-white">2+</span>
      </div>
      <div className="text-center space-y-1">
        <p className="text-gray-300 font-medium">Years Learning</p>
        <p className="text-gray-400">Data Science & ML</p>
      </div>
    </motion.div>

    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
    >
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg mb-4">
        <span className="text-3xl font-bold text-white">5+</span>
      </div>
      <div className="text-center space-y-1">
        <p className="text-gray-300 font-medium">Projects</p>
        <p className="text-gray-400">Completed</p>
      </div>
    </motion.div>

    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
    >
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg mb-4">
        <span className="text-3xl font-bold text-white">90%</span>
      </div>
      <div className="text-center space-y-1">
        <p className="text-gray-300 font-medium">Accuracy</p>
        <p className="text-gray-400">in ML Models</p>
      </div>
    </motion.div>
  </div>
</section>

      <section className="mb-16">
  <h2 className="text-5xl font-semibold mb-2">⚙️🎯SKILLS AND EXPERTISE</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {
    <div>
      <h3 className="text-4xl font-medium mb-2">💻 Programming Languages</h3>
      <ul className="list-disc list-inside space-y-1">
        {[
          { name: "Python" },
          { name: "JavaScript" },
          { name: "HTML/CSS" },
        ].map((lang, index) => (
          <li key={index}>{lang.name}</li>
        ))}
      </ul>
    </div>
    }
    {
    <div>
  <h3 className="text-4xl font-medium mb-2">🗄️Databases</h3>
  <ul className="list-disc list-inside">
    {[
      { name: "MySQL" },
      { name: "Windows" },
      { name: "Linux" },
      { name: "MacOS" },
    ].map((lang, index) => (
      <li key={index}>{lang.name}</li>
    ))}
  </ul>
</div>
    }
    {
     <div>
  <h3 className="text-4xl font-medium mb-2">🤖Machine Learning</h3>
  <ul className="list-disc list-inside">
    {[
      { name: "ML Models" },
      { name: "NLP" },
      { name: "Computer Vision" },
    ].map((lang, index) => (
      <li key={index}>{lang.name}</li>
    ))}
  </ul>
</div> 
    }
    {
      <div>
  <h3 className="text-4xl font-medium mb-2">📊Data Analysis</h3>
  <ul className="list-disc list-inside">
    {[
      { name: "Pandas" },
      { name: "Numpy" },
      { name: "Matplotlib" },
      { name: "Skict-Learn" },
      { name: "Seaborn"},
    ].map((lang, index) => (
      <li key={index}>{lang.name}</li>
    ))}
  </ul>
</div>
    }
    {
      <div>
  <h3 className="text-4xl font-medium mb-2">Frameworks & Tools</h3>
  <ul className="list-disc list-inside">
    {[
      { name: "Power BI" },
      { name: "Tableau" },
      { name: "Flask" },
      { name: "Git" },
      {name: "Google Colab"},
    ].map((lang, index) => (
      <li key={index}>{lang.name}</li>
    ))}
  </ul>
</div>
    }
    {
      <div>
  <h3 className="text-4xl font-medium mb-2">🌐 Web Development</h3>
  <ul className="list-disc list-inside">
    {[
      { name: "Responsive Design" },
      { name: "Modern Frameworks" },
      { name: "User Experience" },
    ].map((lang, index) => (
      <li key={index}>{lang.name}</li>
    ))}
  </ul>
</div>
    }
  </div>
</section>
    <section className="mb-16">
  <h2 className="text-5xl font-semibold mb-6">⏳EXPERIENCE</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    <div>
      <h3 className="text-4xl font-medium mb-4">💡 Technohacks</h3>
      <ul className="list-disc list-inside space-y-2">
        {[
          "Worked on real-world datasets to build predictive models using Python and scikit-learn.",
          "Gained hands-on experience with data preprocessing, feature engineering, and model evaluation techniques.",
          "Completed multiple mini-projects, including spam detection and car service prediction, under guided mentorship.",
        ].map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
    <div>
      <h3 className="text-4xl font-medium mb-4">🤖 Coincent.AI</h3>
      <ul className="list-disc list-inside space-y-2">
        {[
          "Built machine learning models from scratch using Python, NumPy, and Pandas for structured data problems.",
          "Explored core ML algorithms like Naïve Bayes, Linear Regression, and KNN with hands-on implementation.",
          "Developed and evaluated models using cross-validation, confusion matrix, and performance metrics like accuracy and RMSE.",
        ].map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>

  </div>
</section>
    <section className="mb-16">
  <h2 className="text-5xl font-semibold mb-6">🎓EDUCATION</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    <div className="bg-gray-800 p-6 rounded-xl shadow-md">
  <h3 className="text-4xl font-semibold mb-4">🎓 Education</h3>
  <div className="space-y-3">
    <div>
      <p className="text-2xl font-medium">J.B. Institute of Engineering and Technology</p>
      <p className="text-lg text-gray-400">Bachelor of Technology – Artificial Intelligence & Machine Learning</p>
      <p className="text-md text-gray-400">📍 Hyderabad, India</p>
      <p className="text-md text-gray-400">📅 2022 – 2026</p>
      <p className="text-sm text-green-400 font-medium mt-1">Status: In Progress</p>
    </div>
  </div>
</div>

     <div className="bg-gray-800 p-6 rounded-xl shadow-md">
  <h3 className="text-4xl font-semibold mb-4">🎓 Education</h3>
  <div className="space-y-3">
    <div>
      <p className="text-2xl font-medium">Prathiba JR College</p>
      <p className="text-md text-gray-400">📍 Mahabubnagar, Telengana</p>
      <p className="text-md text-gray-400">📅 2020 – 2022</p>
      <p className="text-sm text-green-400 font-medium mt-1">Status: Completed</p>
    </div>
  </div>
</div>
 <div className="bg-gray-800 p-6 rounded-xl shadow-md">
  <h3 className="text-4xl font-semibold mb-4">🎓 Education</h3>
  <div className="space-y-3">
    <div>
      <p className="text-2xl font-medium">Fatima Vidyalayam</p>
      <p className="text-md text-gray-400">📍 Mahabubnagar, Telengana</p>
      <p className="text-md text-gray-400">📅 2011 – 2020</p>
      <p className="text-sm text-green-400 font-medium mt-1">Status: Completed</p>
    </div>
  </div>
</div>

  </div>
</section>
<section className="mb-16">
  <h2 className="text-5xl font-semibold mb-10 text-white">🎓 PROFESSIONAL CERTIFICATES</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      {
        title: 'Technohacks',
        desc: 'Explored core concepts of Data Science through real-world projects during my internship.',
        link: 'https://drive.google.com/file/d/1VNdbaTAz0D9VACI5NmLt7wb6PDIyQ4I-/view?usp=sharing',
      },
      {
        title: 'Coincent.AI',
        desc: 'Applied Python for Machine Learning during internship via hands-on model development.',
        link: 'https://drive.google.com/file/d/1fvcA3CWFX74Z4gCS9n5WW4rv4xI3BCtG/view?usp=sharing',
      },
      {
        title: 'Coursera',
        desc: 'Completed course on transforming raw, messy data into clean datasets for analysis.',
        link: 'https://drive.google.com/file/d/1a8kcIXQO24Tq72h3tRCTJDwQbHfMWnWz/view?usp=sharing',
      },
      {
        title: 'NPTEL',
        desc: 'Completed NPTEL certification in Data Science including statistics and practical applications.',
        link: 'https://drive.google.com/file/d/1FSmpnbbE5lY3g5qKj-BdGxcsXZMpTV9s/view?usp=sharing',
      },
    ].map(({ title, desc, link }) => (
      <div
        key={title}
        className="bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105 p-6"
      >
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{desc}</p>
        <a
          href={link}
          className="text-purple-400 underline hover:text-purple-300 font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </div>
    ))}
  </div>
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
