import * as React from "react";
import styles from "./index.module.css";
import topDividerLight from "../../images/divider/lightTop.png";
import topDividerDark from "../../images/divider/darkTop.png";
import bottomDividerLight from "../../images/divider/lightBottom.png";
import bottomDividerDark from "../../images/divider/darkBottom.png";
import { Description } from "./Description";
import { Technologies } from "./Technologies";
import { ThemeContext } from "../../context";

export function About() {
  const { mode } = React.useContext(ThemeContext);

  return (
    <div className={styles.box}>
      {mode === "light" ? (
        <img
          className={styles.topDivider}
          src={topDividerLight}
          alt="Top divider"
        />
      ) : (
        <img
          className={styles.topDivider}
          src={topDividerDark}
          alt="Top divider"
        />
      )}
      <div
        className={mode === "light" ? styles.textBoxLight : styles.textBoxDark}
      >
        <Description />
        <Technologies />
      </div>
      {mode === "light" ? (
        <img
          className={styles.topDivider}
          src={bottomDividerLight}
          alt="Top divider"
        />
      ) : (
        <img
          className={styles.topDivider}
          src={bottomDividerDark}
          alt="Bottom divider"
        />
      )}
    </div>
  );
}
