import styled from 'styled-components'
import { theme } from 'styles/theme'

type FlexProps = {
  pos?: keyof typeof theme.position
  justify?: keyof typeof theme.flex.justify
}

const StyledFlex = styled.div<FlexProps>`
  position: ${({ pos }) => pos || 'static'};

  display: flex;
  align-items: center;
  justify-content: ${({ justify, theme: { flex } }) => flex.justify[justify!] || 'flex-start'};
`

export const Flex: React.FC<FlexProps> = ({ children, ...props }) => {
  return (
    <>
      <StyledFlex {...props}>{children}</StyledFlex>
    </>
  )
}
