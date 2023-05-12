import styles from "./index.module.css";
import topDivider from "../../images/divider/lightTop.png";
import bottomDivider from "../../images/divider/lightBottom.png";
import { Description } from "./Description";
import { Technologies } from "./Technologies";

export function About() {
  return (
    <div className={styles.box}>
      <img className={styles.topDivider} src={topDivider} alt="Top divider" />
      <div className={styles.textBox}>
        <Description />
        <Technologies />
      </div>
      <img
        className={styles.topDivider}
        src={bottomDivider}
        alt="Top divider"
      />
    </div>
  );
}
