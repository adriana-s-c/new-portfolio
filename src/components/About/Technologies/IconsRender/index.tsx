import * as React from "react";
import styles from "./index.module.css";
import { Icons } from "./iconData";
import { useAnimate, useInView, stagger } from "framer-motion";

export function IconsRender() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  React.useEffect(() => {
    if (isInView) {
      animate(
        "li",
        { opacity: 1 },
        { delay: stagger(0.15, { ease: "circIn" }) }
      );
    }
  }, [isInView, animate]);

  return (
    <ul ref={scope} className={styles.box}>
      {Icons.map((icon: any) => {
        return (
          <li key={icon.id} className={styles.icon}>
            {icon.code}
          </li>
        );
      })}
    </ul>
  );
}
