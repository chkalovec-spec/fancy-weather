import styled from 'styled-components'
import { theme } from 'styles/theme'

type TypographyProps = {
  fw?: keyof typeof theme.fontWeight
  fz?: keyof typeof theme.fontSize
  lh?: keyof typeof theme.lineHeight
  color?: keyof typeof theme.colors
  mr?: string
}

const StyledP = styled.p<TypographyProps>`
  margin-right: ${({ mr }) => `${+mr! / 2}rem` || 0};

  display: inline-block;

  font-size: ${({ fz, theme: { fontSize } }) => fontSize[fz!] || fontSize.sm};
  font-weight: ${({ fw, theme: { fontWeight } }) => fontWeight[fw!] || fontWeight['400']};
  line-height: ${({ lh, theme: { lineHeight } }) => lineHeight[lh!] || lineHeight.sm};

  color: ${({ color, theme: { colors } }) => colors[color!] || colors.white};
`

export const Typography: React.FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <>
      <StyledP {...props}>{children}</StyledP>
    </>
  )
}
