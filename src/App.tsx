// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; // We'll create this
import About from './pages/About';
import Pricing from './pages/Pricing';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AIAssistant from './components/AIAssistant/AIAssistant';

// A layout component to keep the Header and Footer on every page
const AppLayout = () => (
  <div className="bg-background dark:bg-dark-background min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">
      <Outlet /> {/* Child routes will render here */}
    </main>
    <Footer />
    <AIAssistant /> {/* AI Assistant component */}
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
        {/* Routes without Header/Footer */}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;