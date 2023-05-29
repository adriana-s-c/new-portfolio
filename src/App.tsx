import * as React from "react";
import styles from "./index.module.css";
import { Header, About, ThemeMode, Projects, Footer } from "./components";
import { ThemeContext } from "./context";

function App() {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isLightMode, toggle] = React.useReducer((mode) => !mode, !isDarkMode);

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
