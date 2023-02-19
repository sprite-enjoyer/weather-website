import styles from "../styles/weatherInfoPiece.module.scss";
import { ReactNode } from "react";

export interface WeatherInfoPieceProps {
  text: string,
  iconURI?: string,
  Component: ReactNode
}

const WeatherInfoPiece = ({ text, iconURI, Component }: WeatherInfoPieceProps) => {
  return (
    <div className={styles["main"]} >
      <div className={styles["main__section"]}  >
        {Component ??
          <img
            className={styles["main__section__image"]}
            src={iconURI}
            width={30}
            height={30}
            alt={`${text} image`}
          />
        }
        <span className={styles["main__section__txt"]}>
          {text}
        </span>
      </div>
    </div>
  );
};

export default WeatherInfoPiece;