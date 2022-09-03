import styled from "@emotion/styled"

export const Container = styled.footer`
  color: #737373;
  font-size: 16rem;
  margin-top: 80rem;
  min-width: 190rem;
  padding-bottom: 20rem;
  padding-top: 30rem;
  padding-left: 5vw;
  padding-right: 5vw;
  position: relative;
  width: 100%;
`

export const Top = styled.p`
  margin-bottom: 30rem;
  margin-left: -1rem;
`

export const Link = styled.a`
  color: #737373;

  &:hover {
    text-decoration: underline;
  }
`

export const Links = styled.ul`
  max-width: 1000rem;
`

export const LinkItem = styled.li`
  box-sizing: border-box;
  display: inline-block;
  margin-bottom: 16px;
  min-width: 100px;
  padding: 0 12rem 0 0;
  vertical-align: top;
  width: 25%;
  list-style: none;
  margin-left: 0;
  font-size: 13rem;

  @media only screen and (max-width: 740px) {
    width: 33%;
  }

  @media only screen and (max-width: 500px) {
    width: 50%;
  }
`

export const Lang = styled.div`
  margin-top: 20rem;
`