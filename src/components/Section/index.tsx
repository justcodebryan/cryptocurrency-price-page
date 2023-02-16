import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'

import styles from './styles.module.scss'

type SectionProps = PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>

const Section = ({ style, className, children }: SectionProps) => {
  const internalClass = classNames([styles['section'], className])

  return (
    <div className={internalClass} style={style}>
      {children}
    </div>
  )
}

export default Section
