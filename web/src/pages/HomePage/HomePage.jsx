import { MetaTags } from '@redwoodjs/web'

import { Box } from 'src/styles/box'
import { Frame } from 'src/styles/frame'
import { Grid } from 'src/styles/grid'

import styles from './HomePage.module.css'
const HomePage = () => {
  return (
    <Grid min="300px" space="2rem">
      <MetaTags title="Home" description="Home page" />

      <Box padding="var(--s1)">
        <h1 className={styles.homePageHeaderFont}>Planning</h1>
        <p style={{ textAlign: 'center', lineHeight: '2' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id et
          inventore, officia animi ullam rerum esse, eum excepturi laborum a
          nulla veritatis nostrum incidunt, ea reiciendis voluptates distinctio
          eos pariatur?
        </p>
      </Box>
      <Box
        borderWidth="var(--s1)"
        padding="0"
        as="section"
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
      </Box>
    </Grid>
  )
}

export default HomePage
