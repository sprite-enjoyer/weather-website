import { daysOfWeek } from "@/misc/records";
import { FiveDaysForecastApiResponse, FiveDaysForecastData } from "@/misc/types";
import { useEffect, useMemo, useState } from "react";
import styles from "../styles/rightSide.module.scss";
import FiveDaysForeCast from "./FiveDaysForecast";
import WeatherGraph, { GraphCell } from "./WeatherGraph";

export interface RightSideProps {
  lat: string,
  lon: string,
}

const RightSide = ({ lat, lon }: RightSideProps) => {
  const [data, setData] = useState<FiveDaysForecastData[]>();
  const filteredData = useMemo(() => data?.filter((_, i) => i % 8 === 0), [data]);
  const graphData: GraphCell[] | undefined = useMemo(() => data?.map(x => {
    return { date: x.date, temperature: x.temperature, weatherName: x.weatherName };
  }), [data]);

  const updateFiveDaysForecast = async (lat: string, lon: string) => {
    const queryString = `/api/getFiveDaysForecast?lat=${lat}&lon=${lon}`
    const response: FiveDaysForecastApiResponse =
      await fetch(queryString)
        .then(async response => response.json())
        .catch(error => console.error(error));

    let result: FiveDaysForecastData[] = response.list.map(element => {
      const date = new Date(element.dt * 1000);
      return {
        dayName: daysOfWeek[date.getDay()],
        date: date,
        weatherName: element.weather[0].main,
        temperature: `${Math.round(element.main.temp)}°`,
        humidity: `Humidity: ${element.main.humidity}%`,
        windSpeed: `Wind Speed: ${element.wind.speed.toFixed(1)}m/sec`,
        iconName: element.weather[0].icon
      };
    });

    setData(result);
  };

  useEffect(() => { updateFiveDaysForecast(lat, lon) }, [lat, lon]);

  return (
    <div className={styles["main"]} >
      <div className={styles["main__upper"]} >
        <FiveDaysForeCast data={filteredData} />
      </div>
      <div className={styles["main__lower"]} >
        <WeatherGraph data={graphData} />
      </div>
    </div>
  );
};


export default RightSide;