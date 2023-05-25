import * as React from "react";
import styles from "./index.module.css";
import { Header, About, ThemeMode, Projects, Footer } from "./components";
import { ThemeContext } from "./context";

function App() {
  const [mode, setMode] = React.useState("light");
  const isLightMode = mode === "light";

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
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
