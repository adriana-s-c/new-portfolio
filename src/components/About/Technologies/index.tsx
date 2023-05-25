import * as React from "react";
import { ThemeContext } from "../../../context";
import { IconsRender } from "./IconsRender";
import styles from "./index.module.css";

export function Technologies() {
  const { mode } = React.useContext(ThemeContext);
  const isModeLight = mode === "light";

  return (
    <div className={styles.box}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="432.000000pt"
        height="40.000000pt"
        viewBox="0 0 432.000000 40.000000"
        preserveAspectRatio="xMidYMid meet"
        className={isModeLight ? styles.dividerLight : styles.dividerDark}
      >
        <g
          transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M10 371 c0 -12 40 -62 72 -89 47 -40 45 -56 -16 -124 -61 -66 -66
-82 -37 -98 16 -8 30 -2 78 33 32 24 66 56 76 70 24 38 58 43 219 35 160 -8
3363 -12 3376 -4 5 3 71 6 149 7 l140 2 97 -84 c103 -88 131 -105 142 -87 7
11 -47 66 -140 143 l-49 41 81 67 c78 65 100 97 66 97 -21 0 -50 -17 -107 -61
-26 -21 -65 -43 -85 -49 -42 -12 -3829 -28 -3876 -16 -15 4 -49 26 -74 50 -71
65 -112 90 -112 67z"
          />
        </g>
      </svg>
      <h4 className={isModeLight ? styles.headingLight : styles.headingDark}>
        What I've used so far
      </h4>
      <IconsRender />
    </div>
  );
}
