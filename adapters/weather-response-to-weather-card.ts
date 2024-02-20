import type { ForecastResponse, WeatherResponse } from "~/services/types/weather.d"
import type { WeatherView, ForecastView} from "~/adapters/types/weather.d"

export function weatherResponseToWeatherCard(forecast: ForecastResponse, weather: WeatherResponse): WeatherView {
  const dailyForecast: ForecastView[] = []
  let currentDate: number
  
  forecast.list.forEach((item) => {
    const dt = new Date(item.dt * 1000)
    const day = dt.getDate()
    const isNewDay = currentDate !== day

    if (day === new Date().getDate()) {
      return
    }

    if (isNewDay) {
      currentDate = day;
      dailyForecast.push({
        icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
        day: day,
        maxTempDay: null,
        minTempNight: null,
      })
    } 
  
    const temp = Math.round(item.main.temp)
    const isDayTime = item.sys.pod === 'd'
    
    if (isDayTime) {
      const usedTemp = dailyForecast[dailyForecast.length - 1].maxTempDay

      if (usedTemp === null) {
        dailyForecast[dailyForecast.length - 1].maxTempDay = temp
        return
      }

      if (usedTemp < temp) {
        dailyForecast[dailyForecast.length - 1].maxTempDay = temp
      }
    } else {
      const usedTemp = dailyForecast[dailyForecast.length - 1].minTempNight

      if (usedTemp === null) {
        dailyForecast[dailyForecast.length - 1].minTempNight = temp
        return
      }

    
      if (usedTemp > temp) {
        dailyForecast[dailyForecast.length - 1].minTempNight = temp
      }
    }
  })  

  return {
    icon: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`,
    description: weather.weather[0].description,
    temp: Math.round(weather.main.temp),
    humidity: weather.main.humidity,
    windSpeed: weather.wind.speed,
    dailyForecast: dailyForecast.slice(0, 3)
  }
}