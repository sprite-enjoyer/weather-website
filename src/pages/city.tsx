import { WeatherApiResponse } from "@/types";
import { GetServerSidePropsContext } from "next";

export interface CityProps {
  result: WeatherApiResponse;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const standardString = "https://api.openweathermap.org/data/2.5/weather?units=metric";
  const redirectProps = { props: {}, redirect: { destination: "/404", fallback: false } };
  const { cityName } = context.query;

  const { lat, lon }: { lat: number, lon: number } = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}`)
    .then(async (response) => response.json())
    .catch(err => console.log(err));

  if (!lat || !lon) return redirectProps;

  let stringWithQuery = standardString.concat(`&lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_KEY}`);

  const result: WeatherApiResponse = await fetch(stringWithQuery)
    .then(async (data) => await data.json())
    .catch(err => console.log(err));

  return { props: { result: result } };

}


const city = ({ result }: CityProps) => {
  return (
    <div>

    </div>
  );
};



export default city;