import styles from "../styles/weatherInfoPiece.module.scss";
import Image from "next/image";

export interface WeatherInfoPieceProps {
  text: string,
  iconURI: string,
}

const WeatherInfoPiece = ({ text, iconURI }: WeatherInfoPieceProps) => {
  return (
    <div className={styles["main"]} >
      <div className={styles["main__section"]}  >
        <img
          className={styles["main__section__image"]}
          src={iconURI}
          width={30}
          height={30}
          alt={`${text} image`}
        />
        <span className={styles["main__section__txt"]}>
          {text}
        </span>
      </div>
    </div>
  );
};

export default WeatherInfoPiece;