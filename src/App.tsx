import styles from "./index.module.css";
import { Header, About } from "./components";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <About />
    </div>
  );
}

export default App;
