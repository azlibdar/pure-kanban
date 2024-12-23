import Board from "./components/kanban/Board";
import Header from "./components/layout/Header";
import ThemeContext from "./contexts/ThemeContext";
import useTheme from "./hooks/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="w-full h-dvh flex flex-col">
        <Header />
        <Board />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
