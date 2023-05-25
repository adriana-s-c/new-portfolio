import * as React from "react";
import { ThemeContext } from "../../../../context";
import styles from "./index.module.css";

const WebsiteIcon = ({ mode }: { mode: string }) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={mode === "light" ? styles.iconLight : styles.iconDark}
    >
      <path
        fillRule="evenodd"
        d="M18.885 2a1 1 0 00-1-1h-6a1 1 0 100 2h3.586L9.178 9.293a1 1 0 101.414 1.414l6.293-6.293V8a1 1 0 102 0V2zM3.009 3a2.012 2.012 0 00-1.998 2.218c.148 1.453.374 3.978.374 5.782 0 1.746-.212 4.17-.36 5.642a2.028 2.028 0 002.218 2.218c1.473-.148 3.896-.36 5.642-.36 1.804 0 4.33.226 5.782.374a2.012 2.012 0 002.218-1.998V12a1 1 0 10-2 0v4.878l-.003.003a.018.018 0 01-.006.003h-.006c-1.451-.147-4.068-.384-5.985-.384-1.857 0-4.37.222-5.842.37h-.008a.034.034 0 01-.012-.008.033.033 0 01-.008-.012.01.01 0 010-.002v-.006c.148-1.473.37-3.985.37-5.842 0-1.917-.237-4.534-.385-5.985v-.006l.004-.006A.016.016 0 013.007 5h4.878a1 1 0 000-2H3.009z"
      />
    </svg>
  );
};

const DividerIcon = ({ mode }: { mode: string }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="432.000000pt"
      height="40.000000pt"
      viewBox="0 0 432.000000 40.000000"
      preserveAspectRatio="xMidYMid meet"
      className={mode === "light" ? styles.dividerLight : styles.dividerDark}
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
  );
};

const CodeIcon = ({ mode }: { mode: string }) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 -3 19 19"
      version="1.1"
      className={mode === "light" ? styles.iconLight : styles.iconDark}
    >
      <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-180.000000, -3283.000000)"
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M129.204085,3126.419 C129.587463,3126.032 129.587463,3125.405 129.204085,3125.018 L129.191207,3125.005 C128.807829,3124.618 128.186697,3124.618 127.803319,3125.005 L124.287534,3128.553 C123.904155,3128.94 123.904155,3129.568 124.287534,3129.955 L127.803319,3133.503 C128.186697,3133.89 128.807829,3133.89 129.191207,3133.503 L129.204085,3133.49 C129.587463,3133.103 129.587463,3132.476 129.204085,3132.089 L127.090057,3129.955 C126.706679,3129.568 126.706679,3128.94 127.090057,3128.553 L129.204085,3126.419 Z M142.712466,3128.553 L139.196681,3125.005 C138.814294,3124.618 138.192171,3124.618 137.808793,3125.005 L137.795915,3125.018 C137.412537,3125.405 137.412537,3126.032 137.795915,3126.419 L139.910934,3128.553 C140.294312,3128.94 140.294312,3129.568 139.910934,3129.955 L137.795915,3132.089 C137.412537,3132.476 137.412537,3133.103 137.795915,3133.49 L137.808793,3133.503 C138.192171,3133.89 138.814294,3133.89 139.196681,3133.503 L142.712466,3129.955 C143.095845,3129.568 143.095845,3128.94 142.712466,3128.553 L142.712466,3128.553 Z M136.809359,3124.40817 L131.74698,3135.23866 C131.582981,3135.57915 131.295245,3136 130.924037,3136 L130.904396,3136 C130.182602,3136 129.712209,3135.0197 130.031369,3134.3588 L135.064287,3123.63077 C135.228287,3123.29128 135.836165,3123.02511 135.836165,3123.02511 L135.836165,3123 C136.818198,3123 137.127538,3123.74728 136.809359,3124.40817 L136.809359,3124.40817 Z"
              id="code-[#1115]"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

type ProjectCardProps = {
  lightImage: string;
  darkImage: string;
  title: string;
  description: string;
  github: string;
  website: string;
};

export function ProjectCard({
  lightImage,
  darkImage,
  title,
  description,
  github,
  website,
}: ProjectCardProps) {
  const { mode } = React.useContext(ThemeContext);
  const isLightMode = mode === "light";

  return (
    <div className={styles.projectBox}>
      <img
        src={require(`../../../../images/previewImages/${
          isLightMode ? lightImage : darkImage
        }`)}
        alt="Preview App"
        className={styles.previewImg}
      ></img>
      <div className={styles.textBox}>
        <DividerIcon mode={mode} />
        <h3
          className={
            isLightMode ? styles.projectHeaderLight : styles.projectHeaderDark
          }
        >
          {title}
        </h3>
        <p
          className={
            isLightMode ? styles.descriptionLight : styles.descriptionDark
          }
        >
          {description}
        </p>
        <div className={styles.linkBox}>
          <div
            className={isLightMode ? styles.iconBoxLight : styles.iconBoxDark}
          >
            <a href={github} target="_blank" rel="noopener noreferrer">
              <CodeIcon mode={mode} />
            </a>
          </div>
          <div
            className={isLightMode ? styles.iconBoxLight : styles.iconBoxDark}
          >
            <a href={website} target="_blank" rel="noopener noreferrer">
              <WebsiteIcon mode={mode} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
