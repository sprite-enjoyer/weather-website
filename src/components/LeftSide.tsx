import styles from "../styles/leftSide.module.scss";

export interface LeftSideProps {
  humidity: number,
  visibility: number | undefined,
  pressure: number,
  seaLevel: number | undefined,
  cloudiness: number,
  windSpeed: number,

}


const LeftSide = ({ humidity, visibility, pressure, seaLevel, cloudiness, windSpeed }: LeftSideProps) => {

  return (
    <div className={styles["main"]} >
      {humidity}
      {visibility}
      {pressure}
      {seaLevel}
      {cloudiness}
      {windSpeed}
    </div>
  );
};


export default LeftSide;