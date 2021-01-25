import axios, { AxiosResponse } from 'axios'
import { GEO_URL } from 'constants/api'
import { fetchGeolocatonData } from 'types/api'

export const fetchGeolocaton = async (): Promise<fetchGeolocatonData> => {
  const { data }: AxiosResponse<fetchGeolocatonData> = await axios.get(GEO_URL)
  return data
}
