import useServices from 'hooks/useServices'
import getMovies, { Movies } from 'services/getMovies'
import { ArrowLeft } from 'assets/svg'
import { Container, Title, Content, Row, Item, ButtonContainer, Link, Image, Name } from './collections.styled'

function Collections({ title, id }: { title: string, id: number }) {
  const [data, loading] = useServices<Movies[]>(getMovies, { genre: id }, [id])

  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <Row>
          {data.map(({ id, title, backdrop_path}) => (
            <Item key={id}>
              <Link href={`/${id}`}>
                <Image alt={title} src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${backdrop_path}`} />
                <Name>{title}</Name>
              </Link>
            </Item>
          ))}
        </Row>
        <ButtonContainer>
          <ArrowLeft />
        </ButtonContainer>
      </Content>
    </Container>
  )
}

export default Collections
