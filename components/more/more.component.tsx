import Button from 'components/button'
import { Container, Title, Message } from './more.styled'


function More() {

  return (
    <Container>
      <Title>There’s even more to watch.</Title>
      <Message>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</Message>
      <Button theme="red" width="large" href='/' size="large" css={{ marginRight: '10rem' }}>JOIN NOW</Button>
    </Container>
  )
}

export default More