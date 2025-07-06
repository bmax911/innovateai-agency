// src/pages/Pricing.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Building } from 'lucide-react';
import Switch from 'react-switch';
import { useTheme } from '../contexts/ThemeContext'; // We'll use this for the switch style

// Reusable Feature component
const Feature = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <li className="flex items-center space-x-3">
        <div className="flex-shrink-0 text-primary">{icon}</div>
        <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </li>
);

// The main Pricing Card
const PricingCard = ({ plan, monthlyPrice, yearlyPrice, isYearly, description, features, popular }: {
    plan: string,
    monthlyPrice: number,
    yearlyPrice: number,
    isYearly: boolean,
    description: string,
    features: { icon: React.ReactNode, text: string }[],
    popular?: boolean
}) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className={`relative border rounded-2xl p-8 flex flex-col bg-card dark:bg-dark-card ${popular ? 'border-primary shadow-2xl shadow-primary/20' : 'border-border dark:border-dark-border'}`}
    >
        {popular && (
            <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">Most Popular</span>
            </div>
        )}
        <h3 className="text-2xl font-semibold text-foreground dark:text-dark-foreground text-center">{plan}</h3>
        <p className="mt-2 text-gray-500 text-center h-12">{description}</p>

        <div className="mt-6 text-center">
            <span className="text-5xl font-bold text-foreground dark:text-dark-foreground">
                ${isYearly ? yearlyPrice : monthlyPrice}
            </span>
            <span className="text-lg text-gray-500">/mo</span>
        </div>
        {isYearly && <p className="text-center text-primary font-medium text-sm mt-1">Billed Annually</p>}

        <ul className="mt-8 space-y-4 flex-grow">
            {features.map((feature, i) => (
                <Feature key={i} icon={feature.icon} text={feature.text} />
            ))}
        </ul>

        <button className={`mt-10 w-full font-bold py-3 rounded-full text-lg transition-transform transform hover:scale-105 ${popular ? 'bg-primary text-primary-foreground' : 'bg-gray-100 dark:bg-gray-800 text-foreground dark:text-dark-foreground hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
            Choose Plan
        </button>
    </motion.div>
);


const Pricing = () => {
    const [isYearly, setIsYearly] = useState(true);
    const { theme } = useTheme();

    const plans = [
        {
            plan: 'Starter',
            monthlyPrice: 39,
            yearlyPrice: 29,
            description: 'For individuals and small teams dipping their toes in automation.',
            features: [
                { icon: <Check size={20} />, text: '5 AI-Powered Workflows' },
                { icon: <Check size={20} />, text: 'Up to 10,000 tasks/mo' },
                { icon: <Check size={20} />, text: 'Community Support' },
                { icon: <Zap size={20} />, text: 'Access to Standard Models' },
            ],
            popular: false,
        },
        {
            plan: 'Pro',
            monthlyPrice: 99,
            yearlyPrice: 79,
            description: 'For growing businesses ready to scale their operations with powerful AI.',
            features: [
                { icon: <Check size={20} />, text: '50 AI-Powered Workflows' },
                { icon: <Check size={20} />, text: 'Up to 100,000 tasks/mo' },
                { icon: <Check size={20} />, text: 'Email & Chat Support' },
                { icon: <Zap size={20} />, text: 'Access to All Models (GPT-4o, etc)' },
                { icon: <Star size={20} />, text: 'Custom Chatbot Integration' },
            ],
            popular: true,
        },
        {
            plan: 'Enterprise',
            monthlyPrice: 0, // Custom
            yearlyPrice: 0, // Custom
            description: 'For large organizations requiring bespoke solutions and dedicated support.',
            features: [
                { icon: <Check size={20} />, text: 'Unlimited Workflows & Tasks' },
                { icon: <Check size={20} />, text: 'Dedicated Account Manager' },
                { icon: <Check size={20} />, text: 'On-premise n8n Deployment' },
                { icon: <Building size={20} />, text: 'Custom Feature Development' },
                { icon: <Building size={20} />, text: 'Enterprise-grade Security' },
            ],
            popular: false,
        }
    ];

    return (
        <section id="pricing" className="py-20 md:py-28 bg-background dark:bg-dark-background">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-dark-foreground">
                        The Right Plan for Your Ambition
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Commit to a year and save 20%. Cancel anytime.
                    </p>
                </div>

                {/* Toggle Switch */}
                <div className="flex justify-center items-center my-10 space-x-4">
                    <span className={`font-medium ${!isYearly ? 'text-primary' : 'text-gray-500'}`}>Monthly</span>
                    <Switch
                        checked={isYearly}
                        onChange={() => setIsYearly(!isYearly)}
                        onColor="#00bfa5"
                        offColor={theme === 'light' ? '#E5E7EB' : '#374151'}
                        handleDiameter={24}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        height={28}
                        width={52}
                        className="react-switch"
                    />
                    <span className={`font-medium ${isYearly ? 'text-primary' : 'text-gray-500'}`}>
                        Yearly <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Save 20%</span>
                    </span>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
                    {plans.map((p, i) => (
                        // For the enterprise plan, we render a custom card
                        p.plan === 'Enterprise' ? (
                             <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="border rounded-2xl p-8 flex flex-col bg-card dark:bg-dark-card border-border dark:border-dark-border"
                            >
                                <h3 className="text-2xl font-semibold text-foreground dark:text-dark-foreground text-center">Enterprise</h3>
                                <p className="mt-2 text-gray-500 text-center h-12">Bespoke solutions for mission-critical operations.</p>
                                <p className="mt-6 text-center text-2xl font-bold text-foreground dark:text-dark-foreground">
                                    Let's Talk
                                 </p>
                                 <p className="text-center text-gray-500 font-medium text-sm mt-1 h-4"></p>
                                <ul className="mt-8 space-y-4 flex-grow">
                                    {p.features.map((feature, i) => (
                                        <Feature key={i} icon={feature.icon} text={feature.text} />
                                    ))}
                                </ul>
                                 <a href="#contact" className="mt-10 w-full text-center bg-primary text-primary-foreground font-bold py-3 rounded-full text-lg transition-transform transform hover:scale-105">
                                    Contact Sales
                                </a>
                            </motion.div>
                        ) : (
                            <PricingCard key={i} {...p} isYearly={isYearly} />
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;