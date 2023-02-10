import { PropsWithChildren } from 'react'

import styles from './styles.module.scss'

type BoxProps = PropsWithChildren

const Box = ({ children }: BoxProps) => {
  return <div className={styles['box']}>{children}</div>
}

export default Box
