import React from "react"
import classNames from 'classnames'
import { Container } from "./body.styled"

function Body({ children, login }: { children: React.ReactNode, login?: boolean }) {
  return <Container className={classNames({ blur: !login })}>{children}</Container>
}

export default Body