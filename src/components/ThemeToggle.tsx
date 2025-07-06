// src/components/ThemeToggle.tsx
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react'; // A great icon library: npm install lucide-react

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-card dark:bg-dark-card text-foreground dark:text-dark-foreground hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeToggle;