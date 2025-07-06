import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
      console.error(error);
    }
  };

  return (
    <section id="contact" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Ready to Innovate?</h2>
        <p className="text-center text-gray-400 mb-12">
          Fill out the form below for a no-obligation consultation. Let's discuss how we can help you grow.
        </p>
        <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Tell us about your project</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed" disabled={status === 'Sending...'}>
              {status === 'Sending...' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {status && <p className={`text-center text-sm mt-4 ${status.includes('error') ? 'text-red-400' : 'text-green-400'}`}>{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;