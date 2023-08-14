import Navigation from 'src/components/Navigation/Navigation'

import styles from './RootLayout.module.css'
const RootLayout = ({ children }) => {
  return (
    <div className={styles.rootWrapper}>
      <Navigation />
      {children}
    </div>
  )
}

export default RootLayout
