import styled from "@emotion/styled";

export const Container = styled.main`
  flex: 1 1 auto;

  &.blur > :nth-last-child(2) {
    filter: blur(5rem);
    pointer-events: none;
    user-select: none;
  }

  &.blur > :nth-last-child(1) {
    filter: blur(10rem);
    pointer-events: none;
    user-select: none;
  }
`