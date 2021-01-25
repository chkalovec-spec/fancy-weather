import styled from 'styled-components'
import { theme } from 'styles/theme'

type ContainerProps = {
  mw?: keyof typeof theme.maxWidth
}
const StyledContainer = styled.div<ContainerProps>`
  margin: 0 auto;

  width: 90%;
  max-width: ${({ mw, theme: { maxWidth } }) => maxWidth[mw!] || '100%'};
`

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <>
      <StyledContainer {...props}>{children}</StyledContainer>
    </>
  )
}
