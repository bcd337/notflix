import { Container, Width, Theme, Size } from './button.styled'

function Button({
  children,
  href,
  width,
  className,
  size = 'normal',
  theme = 'transparent',
}: {
  children: React.ReactNode,
  href?: string,
  width?: Width,
  theme?: Theme,
  size?: Size,
  className?: string,
}) {
  const themeOptions = {
    red: {
      backgroundColor: '#e50914',
      backgroundImage: 'linear-gradient(180deg,#e50914,#db0510)',
      backgroundColorHover: '#f40612',
      borderWidth: '0',
    },
    transparent: {
      backgroundColor: 'transparent',
      backgroundImage: 'unset',
      backgroundColorHover: 'hsla(0,0%,59%,.3)',
      borderWidth: '1rem',
    }
  }

  const sizeOptions = {
    large: {
      fontSize: '20rem',
      height: '48rem',
      padding: '14rem 2em',
    },
    normal: {
      fontSize: '13rem',
      height: '33rem',
      padding: '9rem 20rem',
    }
  }

  return (
    <Container
      as={href ? 'a' : undefined}
      href={href}
      width={width}
      css={sizeOptions[size]}
      className={className}
      large={size}
      {...themeOptions[theme]}
    >
      {children}
    </Container>
  )
}

export default Button
