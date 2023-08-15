import * as React from 'react'

import styles from './Box.module.css'

export const Box = ({
  padding = 'var(--s1)',
  borderWidth = null,
  children,
}) => {
  const boxStyle = {
    border: borderWidth && `${borderWidth} solid var(--color-white-smoke)`,
    padding: padding,
  }

  return (
    <div className={[styles.box].join(' ')} style={boxStyle}>
      {children}
    </div>
  )
}
