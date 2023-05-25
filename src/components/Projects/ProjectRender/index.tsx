import styles from "./index.module.css";
import { data } from "../../../database";
import { ProjectCard } from "./ProjectCard";
import { FadeIn } from "../../Animations";

export function ProjectRender() {
  return (
    <div className={styles.box}>
      {data.map((project) => {
        return (
          <div className={styles.projectContainer} key={project.id}>
            <FadeIn>
              <ProjectCard
                darkImage={project.darkImage}
                lightImage={project.lightImage}
                title={project.title}
                description={project.description}
                github={project.github}
                website={project.website}
              />
            </FadeIn>
          </div>
        );
      })}
    </div>
  );
}
