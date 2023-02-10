import classnames from 'classnames'
import { PropsWithChildren } from 'react'

import styles from './styles.module.scss'

type CardProps = PropsWithChildren

const Card = ({ children }: CardProps) => {
  const className = classnames([styles['card-wrapper'], styles['card']])

  return <div className={className}>{children}</div>
}

export default Card
