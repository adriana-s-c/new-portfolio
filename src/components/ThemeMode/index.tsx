import * as React from "react";
import styles from "./index.module.css";
import balloonIcon from "../../images/icons/air-hot-balloon.png";
import balloonIconDark from "../../images/icons/air-hot-balloonDark.png";
import { ThemeContext } from "../../context";

export function ThemeMode() {
  const { isLightMode, toggle } = React.useContext(ThemeContext);

  return (
    <div
      className={isLightMode ? styles.boxLight : styles.boxDark}
      onClick={toggle}
    >
      <div className={isLightMode ? styles.lightCircle : styles.darkCircle}>
        <img
          src={isLightMode ? balloonIcon : balloonIconDark}
          alt="gigo"
          className={isLightMode ? styles.lightIcon : styles.darkIcon}
        />
      </div>
    </div>
  );
}
