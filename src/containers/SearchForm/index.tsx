import { Button } from 'lib/Button'
import { Typography } from 'lib/Typography'
import { FormGroup } from 'lib/FormGroup'
import { Input } from 'lib/Input'

import micLogo from 'assets/micIcon.svg'

export const SearchFormContainer: React.FC = () => {
  return (
    <>
      <FormGroup>
        <Input placeholder='Search city or ZIP' icon={micLogo} borderRight='0' />
        <Button borderLeft='0'>
          <Typography fw='700'>Search</Typography>
        </Button>
      </FormGroup>
    </>
  )
}
