import { Button } from 'lib/Button'
import { Typography } from 'lib/Typography'

import arrowIcon from 'assets/arrowIcon.svg'

export const LangContainer: React.FC = () => {
  return (
    <>
      <Button>
        <Typography fw='700' mr='1'>
          en
        </Typography>
        <img src={arrowIcon} alt='arrow' />
      </Button>
    </>
  )
}
