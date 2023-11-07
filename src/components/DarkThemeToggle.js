import React, { useState } from 'react';

function DarkThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    if (isDarkTheme) {
      document.documentElement.classList.remove('dark-theme');
    } else {
      document.documentElement.classList.add('dark-theme');
    }
  };

  return (
    <button onClick={toggleTheme}>
      {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
    </button>
  );
}

export default DarkThemeToggle;
