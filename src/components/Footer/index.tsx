import * as React from "react";
import styles from "./index.module.css";
import { ThemeContext } from "../../context";

export function Footer() {
  const { mode } = React.useContext(ThemeContext);
  const [copied, setCopied] = React.useState("");
  const isLightMode = mode === "light";
  const iconMode = isLightMode ? styles.iconLight : styles.iconDark;

  const copyText = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  return (
    <div className={isLightMode ? styles.boxLight : styles.boxDark}>
      <div className={isLightMode ? styles.contentLight : styles.contentDark}>
        <h3 className={styles.heading}>Contact me</h3>
        <div className={styles.contactBox}>
          <a href="mailto:slaboszadriana@gmail.com">
            <svg
              width="45px"
              height="45px"
              viewBox="0 0 32 32"
              className={iconMode}
            >
              <path d="M5 24.225V7.776h22v16.447H5v.002zm3.011-1.815h15.978l-5.111-5.115L16 20.179l-2.877-2.883-5.112 5.114zm-1.216-1.275l5.077-5.09-5.077-5.065v10.155zm13.332-5.09l5.079 5.09V10.979l-5.079 5.066zm-4.126 1.588l8.022-8.027-16.045-.001 8.023 8.028z" />
            </svg>
          </a>
          <div>
            <p
              className={styles.text}
              onClick={() => copyText("slaboszadriana@gmail.com", "email")}
            >
              slaboszadriana@gmail.com
            </p>
            <div
              className={
                copied === "email"
                  ? styles.copiedAlertEmail
                  : styles.copiedAlertHiddenEmail
              }
            >
              Copied!
            </div>
          </div>
        </div>
        <div className={styles.contactBox}>
          <a href="tel:668954072">
            <svg
              width="45px"
              height="45px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className={iconMode}
            >
              <path d="M20.629 5h-9.257a1.6 1.6 0 0 0-1.601 1.603V25.4a1.6 1.6 0 0 0 1.601 1.601h9.257c.883 0 1.6-.718 1.6-1.601V6.603c0-.885-.717-1.603-1.6-1.603zm-6.247 1.023h3.302v.768h-3.302v-.768zm1.619 19.395a1.024 1.024 0 0 1-1.023-1.021 1.023 1.023 0 0 1 2.044 0c-.001.494-.46 1.021-1.021 1.021zm5.028-3.501H10.971V7.704h10.058v14.213z" />
            </svg>
          </a>
          <p
            className={styles.text}
            onClick={() => copyText("+48 668954072", "phone")}
          >
            +48 668954072
          </p>
          <div
            className={
              copied === "phone"
                ? styles.copiedAlertPhone
                : styles.copiedAlertHiddenPhone
            }
          >
            Copied!
          </div>
        </div>
      </div>
    </div>
  );
}
