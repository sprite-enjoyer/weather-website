import { FiveDaysForecastApiResponse, FiveDaysForecastData } from "@/misc/types";
import { NextApiRequest, NextApiResponse } from "next";

const getFiveDaysForecast = async (req: NextApiRequest, res: NextApiResponse) => {

  let { lat, lon } = req.query;
  const standardString = "https://api.openweathermap.org/data/2.5/forecast?";
  const queries = `lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_KEY}&units=metric`;
  const requestString = standardString.concat(queries);

  const response: FiveDaysForecastApiResponse = await fetch(requestString)
    .then(async res => await res.json())
    .catch(error => console.error(error));

  res.send(response);
};

export default getFiveDaysForecast;