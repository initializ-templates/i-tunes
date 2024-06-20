import React from 'react';
import { useTheme } from '../../contexts/themeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    // Toggle the theme when the button is clicked
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#333333' : '#ffffff',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s, color 0.3s',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        textDecoration: 'none',
      }}
    >
      {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
    </button>
  );
};

export default ThemeToggleButton;
