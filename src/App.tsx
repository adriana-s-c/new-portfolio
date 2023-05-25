import * as React from "react";
import styles from "./index.module.css";
import { Header, About, ThemeMode, Projects, Footer } from "./components";
import { ThemeContext } from "./context";

function App() {
  const [mode, setMode] = React.useState("light");

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <div className={styles.box}>
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
