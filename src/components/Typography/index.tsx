import { PropsWithChildren } from 'react'

type TypographyProps = PropsWithChildren

const Typography = ({ children }: TypographyProps) => {
  return <div>{children}</div>
}

export default Typography
