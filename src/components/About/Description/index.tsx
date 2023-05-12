import styles from "./index.module.css";

export function Description() {
  return (
    <div>
      <h3 className={styles.heading}> Hi! I'm</h3>
      <h2 className={styles.name}>Adriana Słabosz</h2>
      <div className={styles.paragraphBox}>
        <p>
          I am self-taught front end developer. I started with learning CSS,
          HTML, JS. Then I moved on to React and recently I started learning
          TypeScript.
        </p>
        <p>
          Every project is an exciting journey and I cannot wait to start a
          professional one, where I can learn from others, improve and be a part
          of a team.
        </p>
      </div>
    </div>
  );
}
