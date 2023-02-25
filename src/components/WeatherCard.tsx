import styles from "../styles/weatherCard.module.scss";

export interface WeatherCardProps {

  day: string,
  date: string,
  image: string,
  weatherName: string,
  temperature: string,
  humidity: string,
  windSpeed: string,
}

const WeatherCard = ({
  day,
  date,
  image,
  weatherName,
  temperature,
  humidity,
  windSpeed,
}: WeatherCardProps) => {

  return (
    <div className={styles["main"]} >
      <div className={styles["main__date"]} >
        <span className={styles["main__date__day"]} >
          {day}
        </span>
        <span className={styles["main__date__date-txt"]} >
          {date}
        </span>
      </div>
      <div className={styles["main__weather"]} >
        <div className={styles["main__weather__wrapper"]} >
          <img
            src={image}
            className={styles["main__weather__wrapper__image"]}
            alt={"weather image"}
          />
        </div>
        <span className={styles["main__weather__name"]} >
          {weatherName}
        </span>
      </div>
      <div className={styles["main__info"]} >
        <span className={styles["main__info__temperature"]} >
          {temperature}
        </span>
        <div className={styles["main__info__misc"]} >
          <span className={styles["main__info__misc__humidity"]} >
            {humidity}
          </span>
          <span className={styles["main__info__misc__wind-speed"]}>
            {windSpeed}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
