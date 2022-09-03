import styled from "@emotion/styled"

export const Container = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  gap: 24rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 10rem;
  padding-top: 43rem;
  padding-bottom: 34rem;
  padding-left: 16rem;
  padding-right: 16rem;
  position: relative;
  background: #181818;
  margin-top: -144rem;
  width: 100%;

  > * {
    max-width: 730rem;
  }

  &::before {
    background: linear-gradient(180deg,transparent 0,#181818);
    bottom: 100%;
    content: " ";
    height: 360rem;
    pointer-events: none;
    position: absolute;
    width: 100%;
    left: 0;
  }
`

export const Title = styled.h2`
  font-size: 27rem;
  font-weight: 700;

  @media only screen and (min-width: 700px) {
    font-size: 36rem;
  }
`

export const Message = styled.p`
  font-size: 24rem;
  margin-bottom: 10rem;
`