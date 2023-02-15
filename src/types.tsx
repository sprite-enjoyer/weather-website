export interface WeatherApiResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility?: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  rain?: {
    "1h"?: number;
    "3h"?: number;
  };
  snow?: {
    "1h"?: number;
    "3h"?: number;
  };
  dt: number;
  sys: {
    type?: number;
    id?: number;
    message?: number;
    country?: string;
    sunrise?: number;
    sunset?: number;
  };
  timezone?: number;
  id: number;
  name: string;
  cod: number;
}


export interface WeatherParameters {
  city: {
    id: number;
    name: string;
    coord: {
      lon: number;
      lat: number;
    };
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
  temperature: {
    value: number;
    min?: number;
    max?: number;
    unit: "Celsius" | "Kelvin" | "Fahrenheit";
  };
  feels_like: {
    value: number;
    unit: "Celsius" | "Kelvin" | "Fahrenheit";
  };
  humidity: {
    value: number;
    unit: "%";
  };
  pressure: {
    value: number;
    unit: "hPa";
  };
  wind: {
    speed: {
      value: number;
      unit: "m/s";
      name: string;
    };
    direction: {
      value: number;
      code: string;
      name: string;
    };
  };
  clouds: {
    value: number;
    name: string;
  };
  visibility: {
    value: number;
  };
  precipitation: {
    value: number;
    mode: "no" | "rain" | "snow";
  };
  weather: {
    number: number;
    value: string;
    icon: string;
  };
  lastupdate: {
    value: number;
  };
}

export interface WeatherCode {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherGroup {
  group: string;
  codes: WeatherCode[];
}

export const weatherCodes: WeatherGroup[] = [
  {
    group: "2xx",
    codes: [
      { id: 200, main: "Thunderstorm", description: "thunderstorm with light rain", icon: "11d" },
      { id: 201, main: "Thunderstorm", description: "thunderstorm with rain", icon: "11d" },
      { id: 202, main: "Thunderstorm", description: "thunderstorm with heavy rain", icon: "11d" },
      { id: 210, main: "Thunderstorm", description: "light thunderstorm", icon: "11d" },
      { id: 211, main: "Thunderstorm", description: "thunderstorm", icon: "11d" },
      { id: 212, main: "Thunderstorm", description: "heavy thunderstorm", icon: "11d" },
      { id: 221, main: "Thunderstorm", description: "ragged thunderstorm", icon: "11d" },
      { id: 230, main: "Thunderstorm", description: "thunderstorm with light drizzle", icon: "11d" },
      { id: 231, main: "Thunderstorm", description: "thunderstorm with drizzle", icon: "11d" },
      { id: 232, main: "Thunderstorm", description: "thunderstorm with heavy drizzle", icon: "11d" },
    ],
  },
  {
    group: "3xx",
    codes: [
      { id: 300, main: "Drizzle", description: "light intensity drizzle", icon: "09d" },
      { id: 301, main: "Drizzle", description: "drizzle", icon: "09d" },
      { id: 302, main: "Drizzle", description: "heavy intensity drizzle", icon: "09d" },
      { id: 310, main: "Drizzle", description: "light intensity drizzle rain", icon: "09d" },
      { id: 311, main: "Drizzle", description: "drizzle rain", icon: "09d" },
      { id: 312, main: "Drizzle", description: "heavy intensity drizzle rain", icon: "09d" },
      { id: 313, main: "Drizzle", description: "shower rain and drizzle", icon: "09d" },
      { id: 314, main: "Drizzle", description: "heavy shower rain and drizzle", icon: "09d" },
      { id: 321, main: "Drizzle", description: "shower drizzle", icon: "09d" },
    ],
  },
  {
    group: "5xx",
    codes: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
      { id: 502, main: "Rain", description: "heavy intensity rain", icon: "10d" },
      { id: 503, main: "Rain", description: "very heavy rain", icon: "10d" },
      { id: 504, main: "Rain", description: "extreme rain", icon: "10d" },
      { id: 511, main: "Rain", description: "freezing rain", icon: "13d" },
      { id: 520, main: "Rain", description: "light intensity shower rain", icon: "09d" },
      { id: 521, main: "Rain", description: "shower rain", icon: "09d" },
      { id: 522, main: "Rain", description: "heavy intensity shower rain", icon: "09d" },
      { id: 531, main: "Rain", description: "ragged shower rain", icon: "09d" },
    ],
  },
  {
    group: "6xx",
    codes: [
      { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      { id: 601, main: "Snow", description: "snow", icon: "13d" },
      { id: 602, main: "Snow", description: "heavy snow", icon: "13d" },
      { id: 611, main: "Snow", description: "sleet", icon: "13d" },
      { id: 612, main: "Snow", description: "shower sleet", icon: "13d" },
      { id: 613, main: "Snow", description: "light rain and snow", icon: "13d" },
      { id: 615, main: "Snow", description: "rain and snow", icon: "13d" },
      { id: 616, main: "Snow", description: "light shower snow", icon: "13d" },
      { id: 620, main: "Snow", description: "light shower snow", icon: "13d" },
      { id: 621, main: "Snow", description: "shower snow", icon: "13d" },
      { id: 622, main: "Snow", description: "heavy shower snow", icon: "13d" },
    ],
  },
  {
    group: "7xx",
    codes: [
      { id: 701, main: "Mist", description: "mist", icon: "50d" },
      { id: 711, main: "Smoke", description: "smoke", icon: "50d" },
      { id: 721, main: "Haze", description: "haze", icon: "50d" },
      { id: 731, main: "Dust", description: "sand/dust whirls", icon: "50d" },
      { id: 741, main: "Fog", description: "fog", icon: "50d" },
      { id: 751, main: "Sand", description: "sand", icon: "50d" },
      { id: 761, main: "Dust", description: "dust", icon: "50d" },
      { id: 762, main: "Ash", description: "volcanic ash", icon: "50d" },
      { id: 771, main: "Squall", description: "squalls", icon: "50d" },
      { id: 781, main: "Tornado", description: "tornado", icon: "50d" },
    ],
  },
];

