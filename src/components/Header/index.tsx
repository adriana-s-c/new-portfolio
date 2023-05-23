import styles from "./index.module.css";
import { motion } from "framer-motion";

export function Header() {
  return (
    <div className={styles.box}>
      <motion.div
        initial={{ opacity: 0, x: "-20vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 2 }}
      >
        <h1 className={styles.text}>Portfolio</h1>
      </motion.div>
    </div>
  );
}
