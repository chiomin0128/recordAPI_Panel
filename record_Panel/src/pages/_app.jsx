import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
