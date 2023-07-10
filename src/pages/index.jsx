'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import Layout from '../components/Layout';

const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <main className="flex items-center justify-center h-screen flex-col">
      <h2
        className={`text-4xl sm:text-6xl md:text-9xl text-center text-gray-800 dark:text-white `}
      >
        {theme === 'light' ? 'light' : 'dark'} theme
      </h2>
      <button
        className="bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      >
        Alternar para {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </main>
  );
};

export default Button;
