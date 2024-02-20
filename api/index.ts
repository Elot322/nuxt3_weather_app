import axios from "axios"

export default class Api {
  private static baseUrl = 'https://api.openweathermap.org/data/2.5/'

  public static async get<T>(endpoint: string, params?: Record<string, string>): Promise<{data: T}> {
    try {
      const url = this.concatUrl(endpoint, params)
      const response = await axios.get(url)

      return response
    } catch(e: any) {
      throw new Error(e.response.data.message)
    }
  }

  public static async post() {
    throw new Error('Не реализовано')
  }

  public static async put() {
    throw new Error('Не реализовано')
  }

  public static async delete() {
    throw new Error('Не реализовано')
  }

  private static concatUrl(endpoint: string, params?: Record<string, string>) {
    let stringUrl = this.baseUrl + endpoint

    if (!params) {
      return stringUrl
    } else {
      stringUrl = stringUrl + '?'
    }

    for (const key in params) {
      stringUrl = stringUrl + '&' + key + '=' + params[key]
    }

    return stringUrl
  }
}