import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: JSX.Element }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="bg-card dark:bg-dark-card p-6 rounded-lg shadow-lg hover:shadow-primary/20 transform hover:-translate-y-2 transition-all duration-300"
  >
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2 transition-all duration-300">
    <div className="text-cyan-400 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
  </motion.div>
);

const Services: React.FC = () => {
  const serviceData = [
    {
      title: 'AI-Powered Workflows',
      description: 'Custom solutions using Gemini, Claude 4, and GPT-4o at a fraction of the cost. Automate marketing, sales, and operations.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.373 3.373 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    },
    {
      title: 'n8n Integration',
      description: 'Robust, scalable, and self-hostable automation built on n8n. We connect your apps and services seamlessly.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    },
    {
      title: 'Web & Landing Page Builder',
      description: 'High-performance websites built with React or easy-to-manage WordPress sites. Optimized for speed and conversions.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    },
    {
      title: 'Intelligent Chatbots',
      description: 'Deploy custom-instructed chatbots that can handle customer support, lead generation, and perform specific tasks 24/7.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;