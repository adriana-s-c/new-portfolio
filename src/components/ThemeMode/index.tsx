import * as React from "react";
import styles from "./index.module.css";
import balloonIcon from "../../images/icons/air-hot-balloon.png";
import balloonIconDark from "../../images/icons/air-hot-balloonDark.png";

export function ThemeMode() {
  const [mode, setMode] = React.useState("lightMode");

  return (
    <div
      className={mode === "lightMode" ? styles.boxLight : styles.boxDark}
      onClick={() => {
        mode === "lightMode" ? setMode("darkMode") : setMode("lightMode");
      }}
    >
      <div
        className={
          mode === "lightMode" ? styles.lightCircle : styles.darkCircle
        }
      >
        <img
          src={mode === "lightMode" ? balloonIcon : balloonIconDark}
          alt="gigo"
          className={mode === "lightMode" ? styles.lightIcon : styles.darkIcon}
        />
      </div>
    </div>
  );
}
