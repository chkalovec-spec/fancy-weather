import styled from 'styled-components'
import { theme } from 'styles/theme'

type FlexProps = {
  pos?: keyof typeof theme.position
  justify?: keyof typeof theme.flex.justify
  direction?: keyof typeof theme.flex.direction
}

const StyledFlex = styled.div<FlexProps>`
  position: ${({ pos }) => pos || 'static'};

  display: flex;
  align-items: center;
  justify-content: ${({ justify, theme: { flex } }) => flex.justify[justify!] || 'flex-start'};
  flex-direction: ${({ direction, theme: { flex } }) => flex.direction[direction!] || 'raw'};
`

export const Flex: React.FC<FlexProps> = ({ children, ...props }) => {
  return (
    <>
      <StyledFlex {...props}>{children}</StyledFlex>
    </>
  )
}
