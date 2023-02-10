import classNames from 'classnames'
import { CSSProperties, PropsWithChildren } from 'react'

import styles from './styles.module.scss'

type SectionProps = PropsWithChildren<{
  className?: string
  style?: CSSProperties
}>

const Section = ({ style, className, children }: SectionProps) => {
  const internalClass = classNames([styles['section'], className])

  return (
    <div className={internalClass} style={style}>
      {children}
    </div>
  )
}

export default Section
