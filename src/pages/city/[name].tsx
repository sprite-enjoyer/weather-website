import FiveDayForecast from "@/components/FiveDayForecast";
import Header from "@/components/Header";
import LeftSide from "@/components/LeftSide";
import { iconMap } from "@/records";
import { WeatherApiResponse } from "@/types";
import { GetServerSidePropsContext } from "next";
import styles from "../../styles/city.module.scss";

export interface CityProps {
  cityName: string,
  weatherID: number,
  weatherName: string,
  weatherIconName: string,
  temperature: number,
  humidity: number,
  visibility: number | undefined,
  pressure: number,
  seaLevel: number | undefined,
  cloudiness: number,
  windSpeed: number,
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // const standardString = "https://api.openweathermap.org/data/2.5/weather?units=metric";
  // const redirectProps = { props: {}, redirect: { destination: "/404", permanent: false } };
  // const { name } = context.query;
  // const geoData: any[] =
  //   await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=${process.env.OPENWEATHER_KEY}`)
  //     .then(async (response) => await response.json())
  //     .catch(err => console.error(err));

  // if (geoData.length === 0) return redirectProps;

  // const { lat, lon }: { lat: number, lon: number } = geoData[0];

  // if (!lat || !lon) return redirectProps;

  // const stringWithQuery = standardString.concat(`&lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_KEY}`);
  // const result: WeatherApiResponse = await fetch(stringWithQuery)
  //   .then(async (data) => await data.json())
  //   .catch(err => console.log(err));

  // const props: CityProps = {
  //   cityName: result.name,
  //   weatherID: result.weather[0].id,
  //   weatherName: result.weather[0].main,
  //   weatherIconName: result.weather[0].icon,
  //   temperature: result.main.temp,
  //   temperatureMin: result.main.temp_min,
  //   temperatureMax: result.main.temp_max,
  //   humidity: result.main.humidity,
  //   visibility: result.visibility,
  //   pressure: result.main.pressure,
  //   seaLevel: result.main.sea_level,
  //   cloudiness: result.clouds.all,
  //   windSpeed: result.wind.speed,
  // };

  const props = {
    cityName: 'Kutaisi',
    weatherID: 600,
    weatherName: 'Snow',
    weatherIconName: '13d',
    temperature: Math.round(1.29),
    humidity: 89,
    visibility: 7968,
    pressure: 1031,
    seaLevel: 1031,
    cloudiness: 100,
    windSpeed: 2.77
  }

  return { props: props };

}


const city = ({
  cityName,
  weatherID,
  weatherIconName,
  weatherName,
  temperature,
  humidity,
  visibility,
  pressure,
  seaLevel,
  cloudiness,
  windSpeed,
}: CityProps) => {

  const iconLink = iconMap[weatherIconName ?? "200"];

  return (
    <div className={styles["main"]} style={{
      backgroundImage: "url(https://img.rasset.ie/0015d72f-1600.jpg)"
    }} >
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
              humidity={humidity}
              visibility={visibility}
              pressure={pressure}
              seaLevel={seaLevel}
              cloudiness={cloudiness}
              windSpeed={windSpeed}
            />
          </div>
          <div className={styles["main__panel__body__right"]} >
            <FiveDayForecast />
          </div>
        </div>
      </div>
    </div>
  );
};



export default city;