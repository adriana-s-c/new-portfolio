import * as React from "react";
import styles from "./index.module.css";
import { Header, About, ThemeMode, Projects, Footer } from "./components";
import { ThemeContext } from "./context";

function App() {
  const isDarkMode =
    localStorage.getItem("theme-mode") === "null"
      ? window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      : localStorage.getItem("theme-mode") === "light"
      ? true
      : false;

  const [isLightMode, toggle] = React.useReducer((mode) => !mode, isDarkMode);

  React.useEffect(() => {
    localStorage.setItem("theme-mode", isLightMode === true ? "light" : "dark");
  }, [isLightMode]);

  return (
    <ThemeContext.Provider value={{ isLightMode, toggle }}>
      <div className={isLightMode ? styles.boxLight : styles.boxDark}>
        <Header />
        <ThemeMode />
        <About />
        <Projects />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
