import styles from "../styles/windmill.module.scss";
import windmillHead from "public/images/windmill-head.svg";
import windmillBody from "public/images/windmill-body.svg";
import React from "react";
import Image from "next/image";
export interface WindmillProps {
  style?: React.CSSProperties,
  width: string,
  height: string,
}

const Windmill = ({ style, width, height }: WindmillProps) => {
  return (
    <div className={styles["main"]} style={{ width: width, height: height, ...style }} >
      <div className={styles["main__images"]} >
        <img
          className={styles["main__images__head"]}
          src="images/windmill-head.svg"
          alt="windmill head"
        />
        <img
          className={styles["main__images__body"]}
          src="images/windmill-body.svg"
          alt="windmill body"
        />
      </div>
    </div>
  );
};

export default Windmill;