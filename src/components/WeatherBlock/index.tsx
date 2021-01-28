import styled from 'styled-components'

import { WeatherDataType } from 'types/api'

import { Box } from 'lib/Box'
import { Typography } from 'lib/Typography'

type WeatherBlockProps = {
  weatherData: WeatherDataType
}

const StyledIcon = styled.img.attrs(({ src }) => ({
  src,
}))`
  position: absolute;
  top: 64px;

  width: 100px;
`

export const WeatherBlock: React.FC<WeatherBlockProps> = props => {
  const {
    weatherData: { temp_c, feelslike_c, humidity, icon, text, wind_kph },
  } = props

  return (
    <>
      <Typography fz='xxl' fw='700' lh='xxl' mr='1'>
        {temp_c}
        {icon && <StyledIcon src={icon} />}
      </Typography>

      <Box display='inlineBlock'>
        <Typography fz='lg' fw='700' lh='lg' display='block'>
          {text}
        </Typography>
        <Typography fz='lg' fw='700' lh='lg' display='block'>
          {`Feelis like: ${feelslike_c}°`}
        </Typography>
        <Typography fz='lg' fw='700' lh='lg' display='block'>
          {`Wind: ${wind_kph} m/s`}
        </Typography>
        <Typography fz='lg' fw='700' lh='lg' display='block'>
          {`Humidity: ${humidity}%`}
        </Typography>
      </Box>
    </>
  )
}
