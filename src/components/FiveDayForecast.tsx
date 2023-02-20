import styles from "../styles/fiveDayForecast.module.scss";
import WeatherCard from "./WeatherCard";
import WeatherCardsList from "./WeatherCardsList";
import WeatherGraph from "./WeatherGraph";


const FiveDayForecast = () => {
  return (
    <div className={styles["main"]} >
      <div className={styles["main__upper"]} >
        <WeatherCardsList />
      </div>
      <div className={styles["main__lower"]} >
        <WeatherGraph />
      </div>
    </div>
  );
};


export default FiveDayForecast;