import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 border-t border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 px-4">
        {/* Logo and Slogan */}
        <div className="flex flex-col items-center md:items-start gap-2 md:w-1/3">
          <img src="/vite.svg" alt="InnovateAI Logo" className="h-10 mb-2" />
          <span className="text-xl font-bold text-white">InnovateAI Automation</span>
          <span className="text-cyan-400 font-semibold text-sm">We Build, You Earn.</span>
          <p className="text-xs mt-2 max-w-xs text-center md:text-left">
            InnovateAI empowers your business with AI-powered workflows, custom websites, and intelligent automation. Experience the future of productivity.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center gap-2 md:w-1/3">
          <span className="font-semibold text-white mb-2">Quick Links</span>
          <Link to="/about" className="hover:text-cyan-400 transition">About</Link>
          <Link to="/terms-of-use" className="hover:text-cyan-400 transition">Terms of Use</Link>
          <Link to="/privacy-policy" className="hover:text-cyan-400 transition">Privacy Policy</Link>
        </div>

        {/* Newsletter & Social Links */}
        <div className="flex flex-col items-center gap-4 md:w-1/3 w-full">
          <span className="font-semibold text-white mb-2">Stay Updated</span>
          <form className="flex w-full max-w-xs" onSubmit={e => { e.preventDefault(); /* TODO: handle submit */ }}>
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 px-3 py-2 rounded-l-lg bg-neutral-800 text-white border border-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-cyan-500 text-white rounded-r-lg font-semibold hover:bg-cyan-600 transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 mt-2">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-cyan-400 transition">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .352.04.695.116 1.022C7.728 9.37 4.1 7.6 1.67 4.98a4.48 4.48 0 0 0-.61 2.26c0 1.56.795 2.94 2.01 3.75a4.48 4.48 0 0 1-2.034-.563v.057c0 2.18 1.55 4 3.61 4.42-.378.104-.776.16-1.187.16-.29 0-.57-.028-.844-.08.57 1.78 2.23 3.08 4.2 3.12A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.1 9.1 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.694z"/></svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-cyan-400 transition">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76c.965 0 1.75.79 1.75 1.76s-.785 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/></svg>
            </a>
            <a href="mailto:hello@innovateai.com" aria-label="Email" className="hover:text-cyan-400 transition">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 11.98-7.083v-.217z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} InnovateAI Automation. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;