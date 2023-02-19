import { StringLiteralLike } from "typescript";
import styles from "../styles/header.module.scss";
import WeatherInfoPiece from "./WeatherInfoPiece";
import Windmill from "./Windmill";


export interface HeaderProps {
  cityName: string,
  temperature: number,
  iconLink: string,
  weatherName: string,
  windSpeed: string
}

const Header = ({ cityName, temperature, iconLink, weatherName, windSpeed }: HeaderProps) => {

  return (
    <div className={styles["header"]} >
      <div className={styles["header__info"]} >
        <div className={styles["header__info__left"]}>
          <span className={styles["header__info__left__cityName"]} >
            {cityName}
          </span>
          <span className={styles["header__info__left__temperature"]} >
            {temperature}°
          </span>
        </div>
        <div className={styles["header__info__right"]}>
          <img
            className={styles["header__info__right__image"]}
            src={iconLink}
            alt={weatherName + " icon"}
          />
          <span className={styles["header__info__right__weatherName"]}>
            {weatherName}
          </span>
        </div>
      </div>
    </div>
  );
};


export default Header;