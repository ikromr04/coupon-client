import { ErrorMessage, Label, Span, StyledInput, Wrapper } from './styled'

function Input({
  className,
  label,
  errorMessage,
  ...rest
}) {
  return (
    <Wrapper className={className}>
      <Label>
        <Span>{label}</Span>
        <StyledInput error={errorMessage} {...rest} />
      </Label>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Wrapper>
  )
}

export default Input
