import * as React from "react";
import styles from "./index.module.css";
import { Icons } from "./iconData";
import { FadeIn } from "../../../Animations";

export function IconsRender() {
  return (
    <div className={styles.box}>
      {Icons.map((icon: any) => {
        return (
          <div key={icon.id}>
            <FadeIn>
              <div className={styles.icon}>{icon.code}</div>
            </FadeIn>
          </div>
        );
      })}
    </div>
  );
}
