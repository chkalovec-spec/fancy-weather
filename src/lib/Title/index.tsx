import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight[700]};
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.xl};
  text-transform: uppercase;

  color: ${({ theme: { colors } }) => colors.white};
`

export const Title: React.FC = ({ children }) => {
  return (
    <>
      <StyledTitle>{children}</StyledTitle>
    </>
  )
}
