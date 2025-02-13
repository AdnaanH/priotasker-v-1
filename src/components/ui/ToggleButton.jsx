import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ToggleButton;
