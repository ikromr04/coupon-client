import { Span } from './styled'

function Spinner({ 
  className,
  width = 24,
  height = 24,
  ...rest
}) {

  return (
    <Span
      className={className}
      width={width}
      height={height}
      {...rest}
    ></Span>
  )
}

export default Spinner
