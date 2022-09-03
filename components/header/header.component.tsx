import Button from 'components/button'
import { Container, Left, Right, IconNetflixMini, IconNetflix, RightText } from './header.styled'

function Header() {

  return (
    <Container>
      <Left href="/">
        <IconNetflixMini />
        <IconNetflix />
      </Left>
      <Right>
        <RightText>UNLIMITED TV SHOWS & MOVIES</RightText>
        <Button width="large" theme='red'>JOIN NOW</Button>
        <Button href="/login">SIGN IN</Button>
      </Right>
    </Container>
  )
}

export default Header
