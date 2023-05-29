import * as React from "react";
import styles from "./index.module.css";
import { Header, About, ThemeMode, Projects, Footer } from "./components";
import { ThemeContext } from "./context";

function App() {
  const [isLightMode, toggle] = React.useReducer((mode) => !mode, true);

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
