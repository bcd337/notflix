import styled from "@emotion/styled"

export const Container = styled.section`
  margin-bottom: 20rem;
  margin-top: 4vw;
  margin-left: 3vw;
  margin-right: 3vw;
  color: #fff;

  @media (min-width: calc(600px)) {
    max-width: 598rem;
  }
`

export const Title = styled.h1`
  font-size: 2.75em;
  font-weight: 900;
  margin-bottom: 10rem;
  line-height: 1.2;

  @media (min-width: calc(1024px)) {
    font-size: 3em;
  }
`

export const Synopsis = styled.p`
  font-size: 16rem;
  padding-top: .1vw;
  text-shadow: 2rem 2rem 4rem rgba(0,0,0,.6);

  @media (min-width: calc(1024px)) {
    font-size: 19rem;
  }
`
