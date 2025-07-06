// src/components/PricingPreview.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PreviewCard = ({ plan, price, description, popular }: { plan: string, price: string, description: string, popular?: boolean }) => (
    <div className={`border rounded-xl p-6 flex flex-col text-left ${popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-border dark:border-dark-border'}`}>
        <h3 className="text-xl font-semibold text-foreground dark:text-dark-foreground">{plan}</h3>
        {popular && <span className="text-xs font-bold uppercase text-primary mt-1">Most Popular</span>}
        <p className="mt-4 text-4xl font-bold text-foreground dark:text-dark-foreground">{price}<span className="text-base font-normal text-gray-500">/mo</span></p>
        <p className="mt-2 text-gray-600 dark:text-gray-400 h-12">{description}</p>
        <Link to="/pricing" className={`mt-6 w-full text-center font-bold py-3 rounded-full transition-colors ${popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground dark:text-dark-foreground'}`}>
            View All Features
        </Link>
    </div>
);


const PricingPreview = () => {
    return (
        <section id="pricing-preview" className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-foreground dark:text-dark-foreground">Transparent & Simple Pricing</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Choose the plan that's right for your business. No hidden fees, ever.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                >
                    <PreviewCard
                        plan="Starter"
                        price="$29"
                        description="For small businesses & startups ready to automate."
                    />
                    <PreviewCard
                        plan="Pro"
                        price="$79"
                        description="For growing businesses needing advanced integrations."
                        popular={true}
                    />
                    <PreviewCard
                        plan="Enterprise"
                        price="Contact Us"
                        description="Custom solutions for large-scale operational needs."
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default PricingPreview;