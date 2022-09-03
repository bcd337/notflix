import styled from "@emotion/styled"

export const Container = styled.section`
  display: block;
  margin-top: 40rem;
  padding: 0 3%;
  position: relative;

  @media (max-width: 1023px) {
    margin-top: 0;
  }
`

export const Title = styled.h2`
  color: #fff;
  font-size: 20rem;
  font-weight: 500;
  line-height: 27rem;
  margin-top: 0.75em;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 10rem;

  @media (max-width: 1023px) {
    color: #fff;
    font-size: 16rem;
    font-weight: 700;
    line-height: 22rem;
  }
`

export const Content = styled.div`
  position: relative;
  width: 100%;
`

export const Row = styled.ul`
  display: flex;
  margin-top: 16rem;
  margin-right: 0px;
  margin-bottom: 16rem;
  margin-left: 0px;
  overflow-x: scroll;
  scrollbar-width: none;
  gap: 12rem;
`

export const Item = styled.li`
  max-width: 299rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 0 0 auto;

  @media (max-width: 1919px) {
    width: 22vw;
  }

  @media (max-width: 1439px) {
    width: 28vw;
  }

  @media (max-width: 1023px) {
    width: 40vw;
  }
`

export const Link = styled.a`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 4rem;
`

export const Image = styled.img`
  max-height: 168rem;
  background-color: transparent;
  color: transparent;

  @media (max-width: 1919px) {
    height: 12.36120401vw;
  }

  @media (max-width: 1439px) {
    height: 15.73244147vw;
  }

  @media (max-width: 1023px) {
    height: 22.47491639vw;
  }
`

export const Name = styled.span`
  color: #fff;
  text-align: center;
`

export const ButtonContainer = styled.button`
  position: absolute;
  top: 0;
  height: 100%;
  background: transparent;
  border: none;
  color: #e50914;
  left: calc(100% - 60rem);
  padding-right: 0;
  padding-left: 60rem;
  z-index: 1;
  cursor: pointer;

  > * {
    width: 30rem;
    transform: rotate(180deg);
  }
`