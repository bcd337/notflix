import { ReactElement } from 'react'
import { Icon, Arrow, Container, SelectElm, Option } from './select.styles'

type option = {
  label: string,
  value: number | string,
}

function Select({ options, value, icon }: { options: option[], value: option, icon: ReactElement }) {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <SelectElm defaultValue={value.value}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </SelectElm>
      <Arrow />
    </Container>
  )
}

export default Select
