
import React from 'react';

const TermsOfUse: React.FC = () => (
  <section className="max-w-3xl mx-auto py-20 px-4 animate-fade-in-up">
    <h1 className="text-4xl font-extrabold mb-6 text-cyan-600">Terms of Use</h1>
    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
      By accessing or using InnovateAI’s website and services, you agree to these Terms of Use. Please read them carefully.
    </p>
    <h2 className="text-2xl font-bold mt-8 mb-2 text-cyan-500">Use of Services</h2>
    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
      <li>You may use our services only as permitted by law</li>
      <li>Do not misuse or attempt to disrupt our services</li>
      <li>All content is for informational purposes only</li>
    </ul>
    <h2 className="text-2xl font-bold mt-8 mb-2 text-cyan-500">Intellectual Property</h2>
    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
      <li>All content, trademarks, and logos are the property of InnovateAI or its licensors</li>
      <li>You may not copy, reproduce, or distribute content without permission</li>
    </ul>
    <h2 className="text-2xl font-bold mt-8 mb-2 text-cyan-500">Limitation of Liability</h2>
    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
      <li>InnovateAI is not liable for any damages resulting from the use of our website or services</li>
      <li>We do not guarantee uninterrupted or error-free service</li>
    </ul>
    <p className="text-gray-600 dark:text-gray-400 mt-8">For questions about these terms, contact us at <a href="mailto:legal@innovateai.com" className="text-cyan-500 underline">legal@innovateai.com</a>.</p>
  </section>
);

export default TermsOfUse;
