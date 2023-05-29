import * as React from "react";
import styles from "./index.module.css";
import { ThemeContext } from "../../context";

export function Header() {
  const { isLightMode } = React.useContext(ThemeContext);

  return (
    <div className={isLightMode ? styles.boxLight : styles.boxDark}>
      <div
        className={
          isLightMode
            ? styles.animationContainerLight
            : styles.animationContainerDark
        }
      >
        <section className={styles.animation}>
          <div className={isLightMode ? styles.firstLight : styles.firstDark}>
            <div>Portfolio</div>
          </div>
          <div className={isLightMode ? styles.secondLight : styles.secondDark}>
            <div>Portfolio</div>
          </div>
          <div className={isLightMode ? styles.thirdLight : styles.thirdDark}>
            <div>Portfolio</div>
          </div>
        </section>
      </div>
    </div>
  );
}
