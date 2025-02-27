import React, { useState } from 'react'

const Darkmode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.theme === "dark") {
          document.documentElement.classList.add("dark");
          setIsDarkMode(true);
        } else {
          document.documentElement.classList.remove("dark");
          setIsDarkMode(false);
        }
      }, []);

    const toggleTheme = () => {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
          setIsDarkMode(false);
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
          setIsDarkMode(true);
        }
      };
  return (
    <div>darkmode</div>
  )
}

export default Darkmode