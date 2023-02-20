import styles from "../styles/weatherCardsList.module.scss";
import WeatherCard from "./WeatherCard";
import { months } from "@/misc/records";

const WeatherCardsList = () => {
  const getDateString = (date: Date) => `${date.getDate()} ${months[date.getMonth()]}`;

  return (
    <div className={styles["main"]} >
      <WeatherCard
        day={"Tuesday"}
        date={getDateString(new Date()).toString()}
        image={'/images/arrow.svg'}
        weatherName={"Cloudy"}
        temperature={"38°"}
        humidity={"Humidity: 12%"}
        windSpeed={"Wind Speed: 12m/s"}
      />
    </div>
  );
};


export default WeatherCardsList;