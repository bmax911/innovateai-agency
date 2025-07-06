// src/components/Phenomenal.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, BarChart, Zap, Users } from 'lucide-react';

// --- Data Structure for Social Proof ---
// This is where you'll put your real user data.
// For now, we use compelling placeholders.
const userProofs = [
  {
    type: 'testimonial',
    name: 'Sarah L.',
    title: 'Founder, Bloom & Branch',
    avatar: '/avatar1.png',
    quote: "InnovateAI's automation saved us 10+ hours a week. It's not just a tool; it's like having a new, hyper-efficient team member. A total game-changer for our small business.",
  },
  {
    type: 'case-study',
    company: 'Nexus Dynamics',
    logo: '/logo-nexus.png',
    title: 'Lead Generation Increased by 43%',
    description: 'By implementing a custom AI chatbot and n8n workflow, Nexus Dynamics automated their lead qualification process, resulting in a significant and measurable boost in high-quality leads.',
    icon: <BarChart className="text-primary" />,
  },
  {
    type: 'testimonial',
    name: 'David Chen',
    title: 'Marketing Head, QuantumLeap',
    avatar: '/avatar2.jpg',
    quote: "The website they built for us is not only beautiful but incredibly fast. Our conversion rates have never been better. The process was seamless and professional from start to finish.",
  },
  {
    type: 'stat-card',
    value: '68%',
    label: 'Average Cost Reduction',
    description: 'Compared to hiring in-house or using mainstream enterprise tools.',
    icon: <Zap className="text-primary" />,
  },
];


const Phenomenal: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-dark-background py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* --- Headline Section --- */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-dark-foreground tracking-tight">
            Phenomenal Results, Proven by Users
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            We're not just building tools; we're building success stories. See how businesses like yours are thriving with InnovateAI.
          </p>
        </motion.div>

        {/* --- The "Results Wall" Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {userProofs.map((proof, index) => {
            
            // --- Testimonial Card ---
            if (proof.type === 'testimonial') {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card dark:bg-dark-card rounded-2xl p-8 shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
                >
                  <Quote className="w-8 h-8 text-primary/50 mb-4" />
                  <p className="text-lg text-foreground dark:text-dark-foreground mb-6 italic">"{proof.quote}"</p>
                  <div className="flex items-center">
                    <img className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary/50" src={proof.avatar} alt={proof.name} />
                    <div>
                      <h4 className="font-bold text-foreground dark:text-dark-foreground">{proof.name}</h4>
                      <p className="text-sm text-gray-500">{proof.title}</p>
                    </div>
                  </div>
                </motion.div>
              );
            }

            // --- Case Study / Stat Card ---
            if (proof.type === 'case-study' || proof.type === 'stat-card') {
              return (
                 <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-primary/5 dark:bg-dark-card rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
                >
                  {proof.type === 'case-study' ? 
                    <img src={proof.logo} alt={proof.company} className="h-10 mb-4" /> : 
                    <div className="text-6xl font-bold text-primary mb-2">{proof.value}</div>
                  }
                  <h3 className="text-2xl font-bold text-foreground dark:text-dark-foreground">{proof.title || proof.label}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{proof.description}</p>
                </motion.div>
              );
            }
            
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default Phenomenal;