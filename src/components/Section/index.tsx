import { PropsWithChildren } from 'react'

import styles from './styles.module.scss'

type SectionProps = PropsWithChildren

const Section = ({ children }: SectionProps) => {
  return <div className={styles['section']}>{children}</div>
}

export default Section
