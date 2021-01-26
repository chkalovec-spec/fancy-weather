import axios, { AxiosResponse } from 'axios'
import * as _ from 'lodash'

import { GEO_BASE_URL, GEO_TOKEN } from 'constants/api'
import { fetchGeolocatonData, GeolocationDataType } from 'types/api'

export const fetchGeolocaton = async (
  lat: number | null,
  lon: number | null
): Promise<GeolocationDataType> => {
  const { data }: AxiosResponse<fetchGeolocatonData> = await axios.get(
    `${GEO_BASE_URL}?q=${lat}%2C%20${lon}&key=${GEO_TOKEN}&language=en`
  )

  return _.head(data.results)?.components!
}
