import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'

type TypographyProps = PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>

const Typography = ({ children, ...rest }: TypographyProps) => {
  return <div {...rest}>{children}</div>
}

export default Typography
