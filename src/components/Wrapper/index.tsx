import styled from 'styled-components'

const StyledWrapper = styled.div`
  width: 100%;
`

export const Wrapper: React.FC = ({ children }) => {
  return (
    <>
      <StyledWrapper>{children}</StyledWrapper>
    </>
  )
}
