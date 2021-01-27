import { RefreshContainer } from 'containers/Refresh'
import { LangContainer } from 'containers/ChoiceLang'
import { TempContainer } from 'containers/ChoiceTemp'
import { SearchFormContainer } from 'containers/SearchForm'
import styled from 'styled-components'
import { ButtonGroup } from 'lib/ButtonGroup'
import { Flex } from 'lib/Flex'

const StyledHeader = styled.header`
  padding-top: 40px;
  padding-bottom: 60px;
`

export const Header: React.FC = () => {
  return (
    <>
      <StyledHeader>
        <Flex justify='between'>
          <ButtonGroup width='225'>
            <RefreshContainer />
            <LangContainer />
            <TempContainer />
          </ButtonGroup>
          <SearchFormContainer />
        </Flex>
      </StyledHeader>
    </>
  )
}
