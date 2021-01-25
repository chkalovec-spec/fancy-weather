import { Button } from 'lib/Button'
import { ButtonGroup } from 'lib/ButtonGroup'
import { Typography } from 'lib/Typography'

export const TempContainer: React.FC = () => {
  return (
    <>
      <ButtonGroup>
        <Button bgColor='grayDark' borderRight='0'>
          <Typography fw='700' color='whiteDark'>
            °F
          </Typography>
        </Button>
        <Button borderLeft='0'>
          <Typography fw='700'>°С</Typography>
        </Button>
      </ButtonGroup>
    </>
  )
}
