import { useEffect, useLayoutEffect } from 'react'

import { useHover, useMediaQuery, useToggle } from '@uidotdev/usehooks'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './Navigation.module.css'
const Navigation = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width: 768px)')
  const isPortrait = useMediaQuery('(orientation: portrait)')
  const [menu, toggleMenu] = useToggle(false)
  const [expandMenu, setExpand] = useToggle(false)
  const [ref, hovering] = useHover()
  console.log(isPortrait)

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 20) {
        setExpand(true)
      } else {
        setExpand(false)
      }
    }
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [setExpand])

  useLayoutEffect(() => {
    if (menu) {
      document.body.classList.add(styles.overflowYHidden)
    } else {
      document.body.classList.remove(styles.overflowYHidden)
    }
  }, [menu])

  if (isSmallDevice && isPortrait) {
    return (
      <div className={[styles.navigationWrapper, 'navbar'].join(' ')}>
        <nav
          id="navbar"
          className={[
            styles.mobileNavigation,
            expandMenu && styles.expandMobileNavigation,
          ].join(' ')}
        >
          <h4 className={styles.cursiveFont}>Lisa Garza</h4>
          <button
            onClick={() => {
              toggleMenu((prev) => !prev)
            }}
            ref={ref}
            className={styles.mobileNavigationButton}
            type="button"
          >
            {menu ? (
              <i
                className={[
                  'fa-regular fa-square-xmark fa-xl',
                  styles.mobileNavigationMenuIcon,
                  hovering && styles.hoveredIcon,
                ].join(' ')}
              ></i>
            ) : (
              <i
                className={[
                  'fa-sharp fa-regular fa-circle-ellipsis fa-xl',
                  styles.mobileNavigationMenuIcon,
                  styles.mobileNavCloseBtn,
                  hovering && styles.hoveredIcon,
                ].join(' ')}
              ></i>
            )}
          </button>
        </nav>
        <MobileMenu toggleMenu={toggleMenu} menu={menu} />
      </div>
    )
  }

  return (
    <div className={styles.navigationWrapper}>
      <nav>
        <ul></ul>
      </nav>
    </div>
  )
}

export default Navigation

const MobileMenu = ({ toggleMenu, menu }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <AnimatePresence initial={false}>
      {menu && (
        <motion.ul
          onClick={() => toggleMenu(false)}
          className={[
            styles.navMobileList,
            menu && styles.navMobileListActive,
          ].join(' ')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <li className={styles.navMobileLink}>planners</li>
          <li className={styles.navMobileLink}>lifestyle</li>
          <li className={styles.navMobileLink}>blog</li>
          <li className={styles.navMobileLink}>about</li>
        </motion.ul>
      )}
    </AnimatePresence>
  )
}
