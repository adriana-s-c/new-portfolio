import styles from "./index.module.css";
import { ProjectRender } from "./ProjectRender";

export function Projects() {
  return (
    <div className={styles.box}>
      <h2 className={styles.header}>My Projects</h2>
      <ProjectRender />
    </div>
  );
}
