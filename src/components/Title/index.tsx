import classNames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren, cloneElement } from 'react'

import styles from './styles.module.scss'

type TitleProps = PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
    level?: 1 | 2 | 3 | 4
  }
>

const Title = ({ level, style, className, children, ...rest }: TitleProps) => {
  let renderItem

  const internalClass = classNames([styles['title'], level ? styles[`title-${level}`] : '', className])

  switch (level) {
    case 1:
      renderItem = <h1>{children}</h1>
      break
    case 2:
      renderItem = <h2>{children}</h2>
      break
    case 3:
      renderItem = <h3>{children}</h3>
      break
    case 4:
      renderItem = <h4>{children}</h4>
      break
    default:
      renderItem = <div>{children}</div>
  }

  return cloneElement(renderItem, {
    ...rest,
    style,
    className: internalClass,
  })
}

export default Title
