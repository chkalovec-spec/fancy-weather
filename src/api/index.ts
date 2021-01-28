import axios, { AxiosResponse } from 'axios'
import * as _ from 'lodash'

import { GEO_BASE_URL, GEO_TOKEN, WEATHER_BASE_URL, WEATHER_TOKEN } from 'constants/api'
import { FetchGeolocatonData, FetchWeatherData, GeolocationDataType } from 'types/api'

export const fetchGeolocaton = async (
  lat: number | null,
  lon: number | null
): Promise<GeolocationDataType> => {
  const { data }: AxiosResponse<FetchGeolocatonData> = await axios.get(
    `${GEO_BASE_URL}?q=${lat}%2C%20${lon}&key=${GEO_TOKEN}&language=en`
  )

  return _.head(data.results)?.components!
}

export const fetchWeatherData = async (
  lat: number | null,
  lon: number | null
): Promise<FetchWeatherData> => {
  const { data }: AxiosResponse<FetchWeatherData> = await axios.get(
    `${WEATHER_BASE_URL}?key=${WEATHER_TOKEN}&q=${lat},${lon}`
  )
  return data
}
