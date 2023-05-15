import styles from "./index.module.css";
import { Header, About, ThemeMode } from "./components";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <ThemeMode />
      <About />
    </div>
  );
}

export default App;
