import * as React from "react";
import styles from "./index.module.css";
import { Description } from "./Description";
import { Technologies } from "./Technologies";
import { ThemeContext } from "../../context";

export function About() {
  const { isLightMode } = React.useContext(ThemeContext);

  return (
    <div className={styles.box}>
      {isLightMode ? (
        <div className={styles.topDividerLight} />
      ) : (
        <div className={styles.topDividerDark} />
      )}
      <div className={isLightMode ? styles.textBoxLight : styles.textBoxDark}>
        <Description />
        <Technologies />
      </div>
      {isLightMode ? (
        <div className={styles.bottomDividerLight} />
      ) : (
        <div className={styles.bottomDividerDark} />
      )}
    </div>
  );
}
