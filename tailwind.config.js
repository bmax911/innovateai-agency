// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme
        'background': '#FDFDFD',
        'foreground': '#1a2e29',
        'primary': '#00bfa5',
        'primary-foreground': '#ffffff',
        'card': '#ffffff',
        'border': '#E5E7EB',
        // Dark Theme
        'dark-background': '#111827',
        'dark-foreground': '#E5E7EB',
        'dark-primary': '#00bfa5',
        'dark-primary-foreground': '#ffffff',
        'dark-card': '#1f2937',
        'dark-border': '#374151',
      }
    },
  },
  plugins: [],
}