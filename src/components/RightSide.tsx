import { daysOfWeek } from "@/misc/records";
import { FiveDaysForecastApiResponse, FiveDaysForecastData } from "@/misc/types";
import { changeTheme } from "@nextui-org/react";
import { useEffect, useState } from "react";
import styles from "../styles/rightSide.module.scss";
import FiveDaysForeCast, { getDateString } from "./FiveDaysForecast";
import WeatherGraph from "./WeatherGraph";

export interface RightSideProps {
  lat: string,
  lon: string,

}


const RightSide = ({ lat, lon }: RightSideProps) => {

  const [data, setData] = useState<FiveDaysForecastData[]>();
  const filteredData = data?.filter((_, i) => i % 8 === 0);

  const getFiveDaysForecast = async (lat: string, lon: string) => {
    const queryString = `/api/getFiveDaysForecast?lat=${lat}&lon=${lon}`
    const response: FiveDaysForecastApiResponse =
      await fetch(queryString)
        .then(async response => response.json())
        .catch(error => console.error(error));
    let result: FiveDaysForecastData[] = response.list.map(element => {
      const date = new Date(element.dt * 1000);
      return {
        dayName: daysOfWeek[date.getDay()],
        dateString: getDateString(date),
        weatherName: element.weather[0].main,
        temperature: `${Math.round(element.main.temp)}°`,
        humidity: `Humidity: ${element.main.humidity}%`,
        windSpeed: `Wind Speed: ${element.wind.speed.toFixed(1)}m/sec`,
        iconName: element.weather[0].icon
      }
    });

    setData(result);
  };

  useEffect(() => { getFiveDaysForecast(lat, lon) }, []);

  return (
    <div className={styles["main"]} >
      <div className={styles["main__upper"]} >
        <FiveDaysForeCast data={filteredData} />
      </div>
      <div className={styles["main__lower"]} >
        <WeatherGraph />
      </div>
    </div>
  );
};


export default RightSide;