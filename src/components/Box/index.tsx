import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'

import styles from './styles.module.scss'

type BoxProps = PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>

const Box = ({ children, className, ...rest }: BoxProps) => {
  const internalClass = classNames([styles['box'], className])
  return (
    <div className={internalClass} {...rest}>
      {children}
    </div>
  )
}

export default Box
