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

export interface FiveDaysForecastApiResponse {
  cod: string;
  message: number;
  cnt: number;
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
  }[];
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

export interface FiveDaysForecastData {

  dayName: string,
  dateString: string,
  weatherName: string,
  temperature: string,
  humidity: string,
  windSpeed: string,
  iconName: string

}