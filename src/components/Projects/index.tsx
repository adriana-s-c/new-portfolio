import * as React from "react";
import { ThemeContext } from "../../context";
import styles from "./index.module.css";
import { ProjectRender } from "./ProjectRender";

export function Projects() {
  const { isLightMode } = React.useContext(ThemeContext);

  return (
    <div className={styles.box}>
      <h2 className={isLightMode ? styles.headerLight : styles.headerDark}>
        My Projects
      </h2>
      <ProjectRender />
    </div>
  );
}
