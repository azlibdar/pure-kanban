import { useCallback, useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      return storedTheme;
    }

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (theme: string) => {
      if (theme === "dark") {
        root.style.colorScheme = "dark";
        root.classList.add("dark");
        root.classList.remove("light");
      } else {
        root.style.colorScheme = "light";
        root.classList.add("light");
        root.classList.remove("dark");
      }

      root.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    };

    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const changeTheme = useCallback((newTheme: string) => {
    setTheme(newTheme);
  }, []);

  return { theme, setTheme: changeTheme, toggleTheme };
};

export default useTheme;
