import styled from 'styled-components'

type ButtonGroupProps = {
  width?: string
}

const StyledButtonGroup = styled.div<ButtonGroupProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: ${({ width }) => (width ? `${width}px` : 'auto')};
`
export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, ...props }) => {
  return (
    <>
      <StyledButtonGroup {...props}>{children}</StyledButtonGroup>
    </>
  )
}
