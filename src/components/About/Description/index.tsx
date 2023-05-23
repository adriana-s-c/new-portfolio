import styles from "./index.module.css";
import * as React from "react";
import { motion } from "framer-motion";

const aboutData = [
  {
    id: 1,
    content:
      "        I am self-taught front end developer. I started with learning CSS, HTML, JS. Then I moved on to React and recently I started learning TypeScript.",
  },
  {
    id: 2,
    content:
      "I used books, tutorials, free courses, blogs, chat and support groups. I enjoy learning new things, what became a regular everyday activity. ",
  },
  {
    id: 3,
    content:
      "Every project is an exciting journey and I cannot wait to start a  professional one, where I can learn from others, improve and be a part of a team.",
  },
];

export function Description() {
  const [textId, setTextId] = React.useState(1);
  const [activeDotId, setActiveDotId] = React.useState(1);

  function DotIcon({ numberId }: { numberId: number }) {
    return (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        className={
          activeDotId === numberId ? styles.activeDot : styles.unactiveDot
        }
        onClick={() => {
          setActiveDotId(numberId);
          setTextId(numberId);
        }}
      >
        <path
          d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
          fill="#000000"
        />
      </svg>
    );
  }

  return (
    <div>
      <h3 className={styles.heading}> Hi! I'm</h3>
      <h2 className={styles.name}>Adriana Słabosz</h2>
      <div className={styles.paragraphBox}>
        <div className={styles.contentBox}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            key={textId}
          >
            {aboutData[textId - 1].content}
          </motion.div>
        </div>
        <div>
          <DotIcon numberId={1} />
          <DotIcon numberId={2} />
          <DotIcon numberId={3} />
        </div>
      </div>
    </div>
  );
}
