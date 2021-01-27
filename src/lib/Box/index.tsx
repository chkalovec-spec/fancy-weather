import styled from 'styled-components'
import { theme } from 'styles/theme'
type BoxProps = {
  display?: keyof typeof theme.display
}

const StyledBox = styled.div<BoxProps>`
  display: ${({ display, theme: { display: displayTheme } }) => displayTheme[display!] || 'block'};
`

export const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <>
      <StyledBox {...props}>{children}</StyledBox>
    </>
  )
}
