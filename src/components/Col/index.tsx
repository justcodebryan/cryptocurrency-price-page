import { PropsWithChildren } from 'react'

type ColProps = PropsWithChildren

const Col = ({ children }: ColProps) => {
  return <>{children}</>
}

export default Col
