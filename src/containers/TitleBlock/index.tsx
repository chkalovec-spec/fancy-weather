import { useEffect, useState } from 'react'
import { format } from 'date-fns'

import { fetchGeolocaton } from 'api'

import { DATE_MASK, TIME_MASK } from 'constants/masks'
import { TitleBlock } from 'components/TitleBlock'

export const TitleBlockContainer: React.FC = () => {
  const [geoCity, setGeoCity] = useState<string>('')
  const [geoCountry, setGeoCountry] = useState<string>('')
  const [geoDate, setGeoDate] = useState<string>('')
  const [geoTime, setGeoTime] = useState<string>('')

  useEffect(() => {
    const getGeolocation = async () => {
      const { city, country } = await fetchGeolocaton()
      setGeoCity(city)
      setGeoCountry(country)
    }
    getGeolocation()
  }, [])

  useEffect(() => {
    setGeoDate(format(new Date(), DATE_MASK))
    setGeoTime(format(new Date(), TIME_MASK))
  }, [])

  return (
    <>
      <TitleBlock city={geoCity} country={geoCountry} date={geoDate} time={geoTime} />
    </>
  )
}
