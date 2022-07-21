import React from 'react'
import Gallery from '../Gallery/Gallery'
import PageDescription from '../PageDescription/PageDescription'

import classes from './HeroContainer.module.css'


const HeroContainer = () => {
  return (
    <div className={classes.container}>
       <Gallery/>
       <PageDescription/>
     </div>
  )
}

export default HeroContainer