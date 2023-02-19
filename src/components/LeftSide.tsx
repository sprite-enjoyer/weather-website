import styles from "../styles/leftSide.module.scss";
import WeatherInfoPiece from "./WeatherInfoPiece";
import Windmill from "./Windmill";

export interface LeftSideProps {

  windSpeed: string,
  humidity: [string, string],
  pressure: [string, string],
  cloudiness: [string, string],
  feelsLike: [string, string],
  tempMin: [string, string],
  tempMax: [string, string],
  sunrise?: [string, string],
  sunset?: [string, string],
  timezone?: [string, string],
  visibility?: [string, string],
}

const LeftSide = (props: LeftSideProps) => {

  const properties: [string, string][] = Object.values(props);

  return (
    <div className={styles["main"]} >
      <WeatherInfoPiece text={props.windSpeed} Component={<Windmill width={"30px"} height={"40px"} />} />
      {properties.map(
        ([text, link]) => <WeatherInfoPiece key={link} text={text} iconURI={link} Component={undefined} />
      )}
    </div>
  );
};


export default LeftSide;