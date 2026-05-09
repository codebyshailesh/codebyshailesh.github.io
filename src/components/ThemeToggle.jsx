import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Load theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  // Toggle theme
  const handleThemeToggle = () => {
    const newTheme = !isDark;

    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button onClick={handleThemeToggle}>
      {isDark ? (
        <Sun className="h-7 w-7 text-background dark:text-background p-1 bg-accent rounded" />
      ) : (
        <Moon className="h-7 w-7 text-background dark:text-background p-1 bg-accent  rounded" />
      )}
    </button>
  );
};

export default ThemeToggle;
