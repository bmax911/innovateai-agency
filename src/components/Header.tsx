// src/components/Header.tsx
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
      <header className="bg-background/80 dark:bg-dark-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link to="/" className="text-2xl font-bold text-primary">InnovateAI</Link>
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/pricing" className="text-foreground dark:text-dark-foreground hover:text-primary transition-colors">Pricing</Link>
            <Link to="/about" className="text-foreground dark:text-dark-foreground hover:text-primary transition-colors">About</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <SignedOut>
              <Link to="/sign-in" className="text-foreground dark:text-dark-foreground font-medium hover:text-primary transition-colors">Sign In</Link>
              <Link to="/sign-up" className="bg-primary text-primary-foreground font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105">
                Sign Up
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <ThemeToggle />
          </div>
        </div>
      </header>
    );
};

export default Header;