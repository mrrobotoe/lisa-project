import styles from './Frame.module.css'

export const Frame = ({ ratio = '4/4', children }) => {
  const frameStyle = {
    aspectRatio: ratio,
  }
  return (
    <div style={frameStyle} className={styles.frame}>
      {children}
    </div>
  )
}
