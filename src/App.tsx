import styles from "./index.module.css";
import { Header, About, ThemeMode, Projects, Footer } from "./components";

function App() {
  return (
    <div className={styles.box}>
      <Header />
      <ThemeMode />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
