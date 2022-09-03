import { Container, Title, Synopsis } from './billboard.styled'

function Billboard({ title, synopsis }: { title: string, synopsis: string }) {


  return (
    <Container>
      <Title>{title}</Title>
      <Synopsis>{synopsis}</Synopsis>
    </Container>
  )
}

export default Billboard