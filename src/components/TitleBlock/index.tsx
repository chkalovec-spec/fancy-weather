import { Title } from 'lib/Title'
import { Typography } from 'lib/Typography'

type TitleBlockProps = {
  country: string
  city: string
  date: string
  time: string
}

export const TitleBlock: React.FC<TitleBlockProps> = ({ city, country, date, time }) => {
  return (
    <>
      <Title>{`${city}, ${country}`}</Title>
      <Typography fz='lg' lh='lg' fw='700' mr='2'>
        {date}
      </Typography>
      <Typography fz='lg' lh='lg' fw='700'>
        {time}
      </Typography>
    </>
  )
}
