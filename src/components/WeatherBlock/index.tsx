import { Box } from 'lib/Box'
import { Typography } from 'lib/Typography'

export const WeatherBlock: React.FC = () => {
  return (
    <>
      <Typography fz='xxl' fw='700' lh='xxl' mr='1'>
        10
      </Typography>
      <Box display='inlineBlock'>
        <Typography fz='lg' fw='700' lh='lg' display='block'>
          Feels like: 7°
        </Typography>
        <Typography fz='lg' fw='700' lh='lg' display='block'>
          Wind: 2 m/s
        </Typography>
        <Typography fz='lg' fw='700' lh='lg' display='block'>
          Humidity: 83%
        </Typography>
      </Box>
    </>
  )
}
