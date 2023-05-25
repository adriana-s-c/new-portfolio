import * as React from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context";

export function Header() {
  const { mode } = React.useContext(ThemeContext);

  return (
    <div
      className={mode && mode === "light" ? styles.boxLight : styles.boxDark}
    >
      <motion.div
        initial={{ opacity: 0, x: "-20vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 2 }}
      >
        <h1 className={mode === "light" ? styles.textLight : styles.textDark}>
          Portfolio
        </h1>
      </motion.div>
    </div>
  );
}
