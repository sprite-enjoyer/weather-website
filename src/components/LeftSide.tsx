import { link } from "fs";
import React, { ReactNode } from "react";
import styles from "../styles/leftSide.module.scss";
import WeatherInfoPiece from "./WeatherInfoPiece";
import Windmill from "./Windmill";

export interface LeftSideProps {

  windSpeed: [string, ReactNode],
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

  const properties: [string, (string | ReactNode)][] = Object.values(props);

  return (
    <div className={styles["main"]} >
      {properties.map(
        ([text, linkOrNode]) =>
          <WeatherInfoPiece
            key={text}
            text={text}
            iconURI={typeof linkOrNode === "string" ? linkOrNode : undefined}
            Component={typeof linkOrNode === "string" ? undefined : linkOrNode}
          />
      )}
    </div>
  );
};


export default LeftSide;