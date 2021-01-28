import { useContext, useEffect, useState } from 'react'

import { WeatherDataType } from 'types/api'
import { fetchWeatherData } from 'api'

import { AppContext } from 'context'

import { WeatherBlock } from 'components/WeatherBlock'
import { Wrapper } from 'components/Wrapper'

export const WeatherBlockContainer: React.FC = () => {
  const {
    state: {
      coords: { latitude, longitude },
    },
  } = useContext(AppContext)

  const [weatherData, setWeatherData] = useState<WeatherDataType>({
    temp_c: null,
    icon: null,
    text: null,
    feelslike_c: null,
    wind_kph: null,
    humidity: null,
  })

  useEffect(() => {
    const getWeatherData = async () => {
      if (latitude && longitude) {
        const {
          current: {
            temp_c,
            feelslike_c,
            wind_kph,
            humidity,
            condition: { text, icon },
          },
        } = await fetchWeatherData(latitude, longitude)

        setWeatherData({
          temp_c,
          icon,
          text,
          feelslike_c,
          wind_kph: Math.round((wind_kph / 1000) * 3600),
          humidity,
        })
      }
    }
    getWeatherData()
  }, [latitude, longitude])

  return (
    <>
      <Wrapper>
        <WeatherBlock weatherData={weatherData} />
      </Wrapper>
    </>
  )
}
