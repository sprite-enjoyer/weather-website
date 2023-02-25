import styles from "../styles/fiveDaysForecast.module.scss";
import WeatherCard from "./WeatherCard";
import { iconMap, months } from "@/misc/records";
import { FiveDaysForecastData } from "@/misc/types";

export interface FiveDaysForecastProps {
  data?: FiveDaysForecastData[]
}

export const getDateString = (date: Date) => `${date.getDate()} ${months[date.getMonth()]}`;

const FiveDaysForecast = ({ data }: FiveDaysForecastProps) => {

  return (
    <div className={styles["main"]} >
      {
        data && data.map(element =>
          <WeatherCard
            key={getDateString(element.date)}
            day={element.dayName}
            date={getDateString(element.date)}
            image={iconMap[element.iconName ?? "200"]}
            weatherName={element.weatherName}
            temperature={element.temperature}
            humidity={element.humidity}
            windSpeed={element.windSpeed}
          />
        )}
    </div>
  );
};


export default FiveDaysForecast;