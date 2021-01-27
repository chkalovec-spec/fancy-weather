import { useEffect, useState } from 'react'
import { useGeolocation } from 'react-use'
import { format } from 'date-fns'

import { fetchGeolocaton } from 'api'

import { DATE_MASK, TIME_MASK } from 'constants/masks'
import { TitleBlock } from 'components/TitleBlock'
import { Wrapper } from 'components/Wrapper'

export const TitleBlockContainer: React.FC = () => {
  const { latitude, longitude } = useGeolocation()

  const [geoCity, setGeoCity] = useState<string>('')
  const [geoCountry, setGeoCountry] = useState<string>('')
  const [geoDate, setGeoDate] = useState<string>('')
  const [geoTime, setGeoTime] = useState<string>('')

  //TODO remove comment
  useEffect(() => {
    const getGeolocation = async () => {
      if (latitude && longitude) {
        // const { town, country } = await fetchGeolocaton(latitude, longitude)
        // setGeoCity(town)
        // setGeoCountry(country)
      }
    }
    getGeolocation()
  }, [latitude, longitude])

  useEffect(() => {
    setGeoDate(format(new Date(), DATE_MASK))
    setGeoTime(format(new Date(), TIME_MASK))
  }, [])

  return (
    <>
      <Wrapper>
        <TitleBlock city={geoCity} country={geoCountry} date={geoDate} time={geoTime} />
      </Wrapper>
    </>
  )
}
