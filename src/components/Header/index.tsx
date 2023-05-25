import * as React from "react";
import styles from "./index.module.css";
import { ThemeContext } from "../../context";

export function Header() {
  const { mode } = React.useContext(ThemeContext);
  const isModeLight = mode === "light";

  return (
    <div className={isModeLight ? styles.boxLight : styles.boxDark}>
      <div
        className={
          isModeLight
            ? styles.animationContainerLight
            : styles.animationContainerDark
        }
      >
        <section className={styles.animation}>
          <div className={isModeLight ? styles.firstLight : styles.firstDark}>
            <div>Portfolio</div>
          </div>
          <div className={isModeLight ? styles.secondLight : styles.secondDark}>
            <div>Portolio</div>
          </div>
          <div className={isModeLight ? styles.thirdLight : styles.thirdDark}>
            <div>Portfolio</div>
          </div>
        </section>
      </div>
    </div>
  );
}
