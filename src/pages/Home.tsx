import Hero from '../components/Hero';
import Services from '../components/Services';
import PricingPreview from '../components/PricingPreview';
import Contact from '../components/Contact';
import Phenomenal from '../components/Phenomenal';
import ConsentBanner from '../components/ConsentBanner';

const Home = () => {
  return (
    <>
      <ConsentBanner />
      <Hero />
      <Services />
      <Phenomenal />
      <PricingPreview />
      <Contact />
    </>
  );
};

export default Home;
