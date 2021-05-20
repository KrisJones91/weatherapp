import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { weatherApi } from './AxiosService'

// {op}/{z}/{x}/{y}&appid={API key}

class WeatherService {
  async getWeather() {
    try {
      const res = await weatherApi.get('onecall?lat=44.0958976&lon=-116.92933120000001&units=imperial&appid=222eabb5f77f3e2dc81fe0440ec71134')
      logger.log(res.data)
      AppState.weather = res.data
    } catch (error) {
      logger.log(error)
    }
  }
}

export const weatherService = new WeatherService()
