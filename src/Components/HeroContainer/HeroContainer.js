import React from 'react'
import Gallery from '../Gallery/Gallery'
import PageDescription from '../PageDescription/PageDescription'

import classes from './HeroContainer.module.css'


const HeroContainer = ({receiveQuantity}) => {
  return (
    <div className={classes.container}>
       <Gallery/>
       <PageDescription receiveQuantity={receiveQuantity}/>
     </div>
  )
}

export default HeroContainer