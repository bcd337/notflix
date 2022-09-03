import styled from "@emotion/styled"
import { Netflix, NetflixMini } from 'assets/svg'

export const Container = styled.header`
  background-color: #000;
  color: #fff;
  position: sticky;
  top: 0;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 3%;
  height: 56rem;
  z-index: 99;
`

export const Left = styled.a``

export const Right = styled.nav`
  font-size: 13rem;
  display: flex;
  gap: 8rem;
  align-items: center;
`

export const RightText = styled.p`
  @media (max-width: 1023px) {
    display: none;
  }
`

export const IconNetflix = styled(Netflix)`
  display: block;
  height: 40rem;
  width: 110rem;
  fill: #e50914;
  @media (max-width: 599px) {
    display: none;
  }
`

export const IconNetflixMini = styled(NetflixMini)`
  display: none;
  height: 40rem;
  width: 24rem;
  fill: #e50914;
  @media (max-width: 599px) {
    display: block;
  }
`
