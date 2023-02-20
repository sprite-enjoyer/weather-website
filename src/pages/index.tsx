import FiveDayForecast from "@/components/FiveDayForecast";
import Header from "@/components/Header";
import LeftSide from "@/components/LeftSide";
import Windmill from "@/components/Windmill";
import { iconMap } from "@/misc/records";
import { WeatherApiResponse } from "@/misc/types";
import { GetServerSideProps } from "next";
import Head from "next/head";
import styles from "../styles/city.module.scss";

export interface CityProps {

  cityName: string,
  weatherName: string,
  weatherIconName: string,
  temperature: number,
  humidity: number,
  pressure: number,
  cloudiness: number,
  windSpeed: number,
  feelsLike: number,
  tempMin: number,
  tempMax: number,
  sunrise?: string,
  sunset?: string,
  timezone?: string,
  visibility?: number,
};

export const getServerSideProps: GetServerSideProps<CityProps> = async (context) => {

  const standardString = "https://api.openweathermap.org/data/2.5/weather?units=metric";
  const redirectProps = { props: {}, redirect: { destination: "/404", permanent: false } };
  const { lat, lon } = context.query;

  if (!lat || !lon) return redirectProps;

  const stringWithQuery = standardString.concat(`&lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_KEY}`);

  const result: WeatherApiResponse = await fetch(stringWithQuery)
    .then(async (data) => await data.json())
    .catch(err => console.log(err));

  const formattedOffset = result.timezone ?
    'UTC ' + ((result.timezone / 3600) >= 0 ? '+' : '') + result.timezone / 3600
    : undefined;

  return {
    props: {
      cityName: result.name,
      weatherName: result.weather[0].main,
      weatherIconName: result.weather[0].icon,
      temperature: Math.round(result.main.temp),
      tempMin: result.main.temp_min,
      tempMax: result.main.temp_max,
      humidity: result.main.humidity,
      visibility: result.visibility,
      pressure: result.main.pressure,
      cloudiness: result.clouds.all,
      windSpeed: result.wind.speed,
      feelsLike: result.main.feels_like,
      sunrise: result.sys.sunrise ? new Date(result.sys.sunrise * 1000).toLocaleTimeString() : undefined,
      sunset: result.sys.sunset ? new Date(result.sys.sunset * 1000).toLocaleTimeString() : undefined,
      timezone: formattedOffset,
    }
  };
}

const city = ({
  cityName,
  weatherIconName,
  weatherName,
  temperature,
  humidity,
  visibility,
  pressure,
  cloudiness,
  windSpeed,
  feelsLike,
  tempMax,
  tempMin,
  sunrise,
  sunset,
  timezone
}: CityProps) => {

  const iconLink = iconMap[weatherIconName ?? "200"];
  const title4Seo = `Weather in ${cityName}`;

  return (
    <>
      <Head>
        <title>{title4Seo}</title>
      </Head>
      <div className={styles["main"]} >
        <img
          className={styles["main__background-image"]}
          src={`weather-images/${weatherIconName}.jpg`}
          alt="weather image"
        />

        <div className={styles["main__panel"]} >
          <Header
            cityName={cityName}
            temperature={temperature}
            iconLink={iconLink}
            weatherName={weatherName}
          />
          <div className={styles["main__panel__body"]} >
            <div className={styles["main__panel__body__left"]} >
              <LeftSide
                windSpeed={[`Wind Speed: ${windSpeed} m/s`, <Windmill height="40px" width="30px" />]}
                humidity={[`Humidity: ${humidity}%`, "/images/humidity.svg"]}
                visibility={[`Visibility: ${visibility} Meters`, "/images/visibility.svg"]}
                pressure={[`Pressure: ${pressure} hPa`, "/images/pressure.svg"]}
                cloudiness={[`Cloudiness: ${cloudiness}%`, "/images/cloudiness.svg"]}
                feelsLike={[`Feels Like ${feelsLike}°`, "/images/feelsLike.svg"]}
                tempMin={[`Min. Temperature: ${tempMin}°`, "/images/tempMin.svg"]}
                tempMax={[`Max. Temperature: ${tempMax}°`, "/images/tempMax.svg"]}
                sunrise={[`Sunrise At: ${sunrise}`, "/images/sunrise.svg"]}
                sunset={[`Sunset At: ${sunset}`, "/images/sunset.svg"]}
                timezone={[`Timezone: ${timezone}`, "/images/timezone.svg"]}
              />
            </div>
            <div className={styles["main__panel__body__right"]} >
              <FiveDayForecast />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default city;