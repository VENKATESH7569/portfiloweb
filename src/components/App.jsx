import React from 'react';
import { useState } from "react";
import emailjs from '@emailjs/browser'; // ✅ EmailJS import

// Custom components replacing ShadCN UI
const Card = ({ children }) => <div className="bg-gray-800 rounded-xl p-4 shadow-md mb-4">{children}</div>;
const CardContent = ({ children }) => <div>{children}</div>;
const Input = (props) => <input {...props} className={"p-2 rounded bg-gray-800 border border-gray-700 text-white " + props.className} />;
const Textarea = (props) => <textarea {...props} className={"p-2 rounded bg-gray-800 border border-gray-700 text-white " + props.className} />;
const Button = (props) => <button {...props} className={"p-2 rounded bg-purple-600 hover:bg-purple-700 text-white " + props.className} />;

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


    console.log("Template Params:", templateParams);


    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
  alert('Failed to send message. Please try again later.');
  console.error('EmailJS Error:', error.text || error);
});

  };

  return (
    <main className="bg-black text-white min-h-screen p-6 font-sans">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">Gadige Venkatesh</h1>
          <p className="text-gray-300">Data Science Engineer | Web Developer</p>
        </div>
        <div>
          <img src="/images/dp.jpg" alt="dp images" className="rounded-2xl shadow-xl w-full max-w-sm" />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-400">
          I am a Data Science Engineer with a strong foundation in statistics, machine learning, and data analysis.
          I combine technical expertise with web development skills to build intelligent, user-friendly applications
          that solve real-world problems.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Projects & Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent>
              <img src="/images/Crop.jpg" alt="Crop Recommendation images" className="rounded mb-4" />
              <h3 className="text-lg font-bold mb-2">Crop Recommendation System</h3>
              <p className="text-gray-400 mb-2">Predicts the best crop based on soil and climate inputs using ML.</p>
              <a href="https://github.com/VENKATESH7569/Crop-recommendation-system" className="text-purple-400 underline">View on GitHub</a>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <img src="/images/House.jpg" alt="House Price Prediction images" className="rounded mb-4" />
              <h3 className="text-lg font-bold mb-2">House Price Prediction</h3>
              <p className="text-gray-400 mb-2">Predicts house prices based on features using regression models.</p>
              <a href="https://github.com/VENKATESH7569/HOUSE-PRICE-PREDCTION" className="text-purple-400 underline">View on GitHub</a>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <img src="/images/email_spam.jpg" alt="Email Spam Filtering images" className="rounded mb-4" />
              <h3 className="text-lg font-bold mb-2">Email Spam Filtering</h3>
              <p className="text-gray-400 mb-2">Classifies emails as spam or not using NLP and ML techniques.</p>
              <a href="https://github.com/VENKATESH7569/EMAIL-SPAM-FILTERING" className="text-purple-400 underline">View on GitHub</a>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <img src="/images/churn_pred.jpg" alt="Customer Churn Prediction images" className="rounded mb-4" />
              <h3 className="text-lg font-bold mb-2">Customer Churn Prediction</h3>
              <p className="text-gray-400 mb-2">Predicts whether customers will leave a service using classification models.</p>
              <a href="https://github.com/VENKATESH7569/CHURN-PREDCTION" className="text-purple-400 underline">View on GitHub</a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <blockquote className="italic text-gray-400 border-l-4 pl-4 border-purple-500">
          "Data is not just numbers, it’s insight waiting to be discovered."
        </blockquote>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
        <p className="text-gray-400">
          Python, R, SQL, Pandas, NumPy, Scikit-learn, TensorFlow, Power BI, React, HTML/CSS, Git, Flask
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
          <Input
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">Send</Button>
        </form>
      </section>
    </main>
  );
}
