// src/components/Hero.tsx
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground">
      <div className="container mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            The Future of Your Business, <span className="text-primary">Automated.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-lg">
            We build intelligent AI and automation systems so you can focus on what matters: growth.
          </p>
          <p className="mt-2 text-xl font-semibold text-foreground dark:text-dark-foreground">We Build, You Earn.</p>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-primary/30"
          >
            Explore Pricing
          </motion.a>
        </motion.div>

        {/* Right Side: Visual (e.g., an abstract animation or image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block bg-gradient-to-tr from-primary/20 via-card dark:via-dark-card to-background dark:to-dark-background p-4 rounded-3xl"
        >
           {/* You can place an image or a more complex visual here */}
           <div className="w-full h-96 bg-card dark:bg-dark-card rounded-2xl flex items-center justify-center">
             <p className="text-gray-400">Your visual element here</p>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;