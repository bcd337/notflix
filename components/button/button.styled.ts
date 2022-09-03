import styled from "@emotion/styled"

export type Width = 'large' | 'small'
export type Theme = 'red' | 'transparent'
export type Size = 'large' | 'normal'

export type ContainerProps = {
  href?: string,
  width?: Width,
  backgroundImage: string,
  backgroundColor: string,
  backgroundColorHover: string,
  borderWidth: string,
  large: string,
}

export const Container = styled.button<ContainerProps>(({ width, backgroundColor, backgroundImage, backgroundColorHover, borderWidth, large }) => `
  border: ${borderWidth} solid #888;
  cursor: pointer;
  border-radius: 2rem;
  color: #fff;
  font-weight: 400;
  font-size: 13rem;
  line-height: 15rem;
  white-space: nowrap;
  padding: 9rem 20rem;
  box-shadow: 0 1px 0 rgba(0,0,0,.45);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 33rem;
  background-color: ${backgroundColor};
  background-image: ${backgroundImage};
  min-width: ${width === 'large' ? '112rem' : 'unset'};

  &:hover {
    background: ${backgroundColorHover};
    text-decoration: none;
  }

  ${!large && `
    @media (max-width: 1023px) {
      padding: 9rem 12rem;
    }
  ` || `
    @media only screen and (max-width: 500px) {
      margin: .5em auto;
      width: 100%;
    }
  `}
`)