import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'

import styles from './styles.module.scss'

type FlexProps = PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>

const Flex = ({ children, ...rest }: FlexProps) => {
  return (
    <div className={styles['flex']} {...rest}>
      {children}
    </div>
  )
}

export default Flex
