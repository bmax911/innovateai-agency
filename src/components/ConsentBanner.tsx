import React, { useState, useEffect } from 'react';

const CONSENT_KEY = 'innovateai_consent';

const ConsentBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState<'unset' | 'accepted' | 'rejected'>('unset');

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    } else {
      setConsent(stored as 'accepted' | 'rejected');
    }
  }, []);

  const handleConsent = (value: 'accepted' | 'rejected') => {
    setConsent(value);
    setVisible(false);
    localStorage.setItem(CONSENT_KEY, value);
    // Here you would trigger Google Consent Mode, analytics, etc.
    // window.gtag('consent', value === 'accepted' ? 'grant' : 'deny');
  };

  if (!visible || consent !== 'unset') return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-700 shadow-lg animate-fade-in-up">
      <div className="max-w-3xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700 dark:text-gray-200">
          We use cookies and similar technologies to enhance your experience, analyze site usage, and deliver personalized ads. You can manage your consent settings at any time. <a href="/privacy-policy" className="underline text-cyan-600">Learn more</a>.
        </div>
        <div className="flex gap-2 mt-2 md:mt-0">
          <button
            className="px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
            onClick={() => handleConsent('accepted')}
          >
            Accept All
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-neutral-700 transition"
            onClick={() => handleConsent('rejected')}
          >
            Reject All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
