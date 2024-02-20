export interface WeatherResponse {
  weather: Weather[];
  main: Main;
  wind: Wind;
}

export interface ForecastResponse {
  list: List[]
}

interface List {
  dt: number;
  weather: Weather[];
  main: Main;
  sys: {
    pod: string
  }
}

interface Weather {
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  humidity: number;
}

interface Wind {
  speed: number;
}