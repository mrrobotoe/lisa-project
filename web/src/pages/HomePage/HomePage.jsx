import { MetaTags } from '@redwoodjs/web'

import { Box } from 'src/styles/box'
import { Frame } from 'src/styles/frame'

import styles from './HomePage.module.css'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Box padding="var(--s1)">
        <h1 className={styles.homePageHeaderFont}>Planning</h1>
      </Box>
      <section
        className={[styles.homePageSections, styles.homePageHeroSection].join(
          ' '
        )}
      >
        <Frame>
          <img
            src="https://images.unsplash.com/photo-1531347472897-982afb0e23a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80"
            alt="planner and watch dispalyed on table"
          />
        </Frame>
      </section>
    </>
  )
}

export default HomePage
