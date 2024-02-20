export interface WeatherView {
  icon: string;
  description: string;
  temp: number;
  humidity: number;
  windSpeed: number;
  dailyForecast: ForecastView[]
}

export interface ForecastView {
  icon: string;
  day: number;
  maxTempDay: null | number;
  minTempNight: null | number;
}