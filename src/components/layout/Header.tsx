import { useContext } from "react";
import IconButton from "../common/IconButton";
import ThemeContext from "../../contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="w-full flex py-4 px-6 justify-between items-center bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
      <h1 className="text-sm md:text-base text-zinc-800 dark:text-zinc-200 tracking-tight font-semibold">Kanban Board</h1>
      <div>
        <IconButton title="Toggle theme" onClick={toggleTheme}>
          {theme === "light" ? <Sun size={20} strokeWidth={1.75} /> : <Moon size={20} strokeWidth={1.75} />}
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
