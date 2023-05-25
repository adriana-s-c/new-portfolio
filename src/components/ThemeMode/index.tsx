import * as React from "react";
import styles from "./index.module.css";
import balloonIcon from "../../images/icons/air-hot-balloon.png";
import balloonIconDark from "../../images/icons/air-hot-balloonDark.png";
import { ThemeContext } from "../../context";

export function ThemeMode() {
  const { mode, setMode } = React.useContext(ThemeContext);

  return (
    <div
      className={mode === "light" ? styles.boxLight : styles.boxDark}
      onClick={() => {
        mode === "light" ? setMode("dark") : setMode("light");
      }}
    >
      <div
        className={mode === "light" ? styles.lightCircle : styles.darkCircle}
      >
        <img
          src={mode === "light" ? balloonIcon : balloonIconDark}
          alt="gigo"
          className={mode === "light" ? styles.lightIcon : styles.darkIcon}
        />
      </div>
    </div>
  );
}
