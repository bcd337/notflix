import styled from "@emotion/styled"
import { ArrowDown } from "assets/svg"

export const Container = styled.div`
  display: inline-block;
  position: relative;
`

export const SelectElm = styled.select`
  background-color: #000;
  background-image: none;
  border: 1rem solid #333;
  line-height: 1.7;
  padding-left: 50rem;
  padding-right: 26rem;
  text-indent: 0;
  color: inherit;
  height: 48.1rem;
  font-size: 13rem;
  appearance: none;
  outline: none;
`

export const Option = styled.option`
  
`

export const Icon = styled.span`
  color: #999;
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  left: 12rem;

  > * {
    width: 20rem;
    height: 20rem;
  }
`

export const Arrow = styled(ArrowDown)`
  color: #999;
  position: absolute;
  height: 100%;
  width: 23rem;
  right: 7rem;
`