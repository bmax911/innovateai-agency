
import React from 'react';

const PrivacyPolicy: React.FC = () => (
  <section className="max-w-3xl mx-auto py-20 px-4 animate-fade-in-up">
    <h1 className="text-4xl font-extrabold mb-6 text-cyan-600">Privacy Policy</h1>
    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
      Your privacy is important to us. This Privacy Policy explains how InnovateAI collects, uses, and protects your information when you use our website and services.
    </p>
    <h2 className="text-2xl font-bold mt-8 mb-2 text-cyan-500">Information We Collect</h2>
    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
      <li>Personal information you provide (such as name, email, and message via contact forms)</li>
      <li>Usage data (such as pages visited, browser type, and device information)</li>
    </ul>
    <h2 className="text-2xl font-bold mt-8 mb-2 text-cyan-500">How We Use Your Information</h2>
    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
      <li>To respond to your inquiries and provide customer support</li>
      <li>To improve our website and services</li>
      <li>To send important updates or marketing communications (with your consent)</li>
    </ul>
    <h2 className="text-2xl font-bold mt-8 mb-2 text-cyan-500">Your Rights</h2>
    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
      <li>You can request access, correction, or deletion of your personal data at any time</li>
      <li>You can opt out of marketing communications</li>
    </ul>
    <p className="text-gray-600 dark:text-gray-400 mt-8">For questions about this policy, contact us at <a href="mailto:privacy@innovateai.com" className="text-cyan-500 underline">privacy@innovateai.com</a>.</p>
  </section>
);

export default PrivacyPolicy;
