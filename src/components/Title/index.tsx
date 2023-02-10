import { PropsWithChildren } from 'react'

type TitleProps = PropsWithChildren<{
  level?: 1 | 2 | 3 | 4
}>

const Title = ({ level, children, ...rest }: TitleProps) => {
  let renderItem

  switch (level) {
    case 1:
      renderItem = <h1 {...rest}>{children}</h1>
      break
    case 2:
      renderItem = <h2 {...rest}>{children}</h2>
      break
    case 3:
      renderItem = <h3 {...rest}>{children}</h3>
      break
    case 4:
      renderItem = <h4 {...rest}>{children}</h4>
      break
    default:
      renderItem = <div {...rest}>{children}</div>
  }

  return renderItem
}

export default Title
