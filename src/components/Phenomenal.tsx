import React from 'react';

/**
 * Phenomenal component: A showcase section built with principles of simplicity, visual hierarchy,
 * F-shaped pattern reading, and a grid-based layout. Use for landing pages, feature highlights, etc.
 */
const features = [
  {
    title: 'AI-Powered Automation',
    description: 'Automate repetitive tasks and workflows with cutting-edge AI models, saving you time and boosting productivity.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#06b6d4"/><path d="M10 16h12M16 10v12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: 'Seamless Integrations',
    description: 'Connect with your favorite tools like n8n, Slack, and more. Integrate effortlessly for a unified workflow.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#818cf8"/><path d="M10 16h12M16 10v12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: 'Custom Websites',
    description: 'Get beautiful, high-converting websites tailored to your brand and business goals.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#f59e42"/><path d="M10 16h12M16 10v12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: 'Intelligent Chatbots',
    description: 'Engage your customers 24/7 with smart, conversational AI chatbots that drive results.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#10b981"/><path d="M10 16h12M16 10v12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
];

const Phenomenal: React.FC = () => {
  return (
    <section className="w-full bg-white dark:bg-neutral-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Headline and intro (F-pattern: left-aligned, bold, short) */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
            Phenomenal Results, Simple Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Discover how InnovateAI transforms your business with a clean, focused, and effective approach to automation and digital growth.
          </p>
        </div>
        {/* Grid-based feature layout (visual hierarchy, F-pattern) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-neutral-200 dark:border-neutral-700"
              style={{ gridColumn: idx === 0 ? 'span 2' : undefined }}
            >
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Phenomenal;
