import { useTheme } from "../../context/ThemeContext";
import ToggleButton from "../ui/ToggleButton";
import logo from '../../assets/logo.png'
import logo2 from '../../assets/logo-2.png'

const Header = () => {
    const { theme } = useTheme()

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-900">
        <h1 className="text-xl font-semibold flex items-center gap-2">
            <img src={theme === 'light' ? logo : logo2} alt="Logo" className="w-8 h-8" />
            Priotasker
        </h1>
        <ToggleButton />
    </header>
  );
};

export default Header;
