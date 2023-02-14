import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'

import styles from './styles.module.scss'

type CardProps = PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>

const Card = ({ children, className, ...rest }: CardProps) => {
  const internalClass = classNames([styles['card-wrapper'], styles['card'], className])

  return (
    <div className={internalClass} {...rest}>
      {children}
    </div>
  )
}

export default Card
