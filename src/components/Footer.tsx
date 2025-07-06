const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 border-t border-gray-700">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} InnovateAI Automation. All Rights Reserved.</p>
        <p className="mt-2 text-sm text-cyan-400 font-semibold">We Build, You Earn.</p>
      </div>
    </footer>
  );
};

export default Footer;