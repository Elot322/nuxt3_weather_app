import Api from "~/api"
import type { WeatherResponse, ForecastResponse } from "~/services/types/weather.d"
import { useRuntimeConfig } from "#app"

export async function getWeather(getParams: Record<string, string>): Promise<{weather: WeatherResponse, forecast: ForecastResponse}> {
  const config = useRuntimeConfig()

  const token = config.public.TOKEN

  const params = {
    ...getParams,
    'appId': token
  }

  const weather = (await Api.get<WeatherResponse>('weather', params)).data
  const forecast = (await Api.get<ForecastResponse>('forecast', params)).data

  return {
    weather,
    forecast
  }
}