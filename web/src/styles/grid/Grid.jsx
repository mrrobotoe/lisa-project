import styles from './Grid.module.css'

export const Grid = ({ min = '250px', space = '1rem', children }) => {
  const GridStyle = {
    '--min': min,
    '--space': space,
  }
  return (
    <div style={GridStyle} className={styles.grid}>
      {children}
    </div>
  )
}
