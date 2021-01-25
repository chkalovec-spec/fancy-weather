import { useCallback } from 'react'
import styled from 'styled-components'

type FormGroupProps = {
  width?: string
}

const StyledFormGroup = styled.form<FormGroupProps>`
  display: flex;
  align-items: center;

  width: ${({ width }) => (width ? `${width}px` : 'auto')};
`
export const FormGroup: React.FC<FormGroupProps> = ({ children, ...props }) => {
  const onSubmitHandler = useCallback((e: React.FormEvent): void => {
    e.preventDefault()
  }, [])

  return (
    <>
      <StyledFormGroup {...props} onSubmit={onSubmitHandler}>
        {children}
      </StyledFormGroup>
    </>
  )
}
