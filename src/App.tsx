import styles from "./index.module.css";
import { Header, About, ThemeMode, Projects } from "./components";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <ThemeMode />
      <About />
      <Projects />
    </div>
  );
}

export default App;
