import * as React from 'react'

import styles from './Box.module.css'

export const Box = ({
  padding = 'var(--s1)',
  borderWidth = 'var(--s0)',
  children,
}) => {
  const boxStyle = { borderWidth: borderWidth, padding: padding }

  return (
    <div className={[styles.box].join(' ')} style={boxStyle}>
      {children}
    </div>
  )
}
