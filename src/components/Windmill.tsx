import styles from "../styles/windmill.module.scss";
import windmillHead from "public/images/windmill-head.svg";
import windmillBody from "public/images/windmill-body.svg";
import Image from "next/image";
import React from "react";

export interface WindmillProps {
  style?: React.CSSProperties,
  width: string,
  height: string,
}

const Windmill = ({ style, width, height }: WindmillProps) => {
  return (
    <div className={styles["main"]} style={{ width: width, height: height, ...style }} >
      <div className={styles["main__images"]} >
        <Image
          className={styles["main__images__head"]}
          src={windmillHead}
          alt="windmill head"
        />
        <Image
          className={styles["main__images__body"]}
          src={windmillBody}
          alt="windmill body"
        />
      </div>
    </div>
  );
};

export default Windmill;