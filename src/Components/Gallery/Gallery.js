import React from 'react'
import classes from './Gallery.module.css'

const Gallery = () => {
  return (
    <div className={classes.cover}>
      <div className={classes.focus}>
        <img src='/images/image-product-1.jpg'/>
      </div>
      <div className={classes.thumbnail}>
        <div className={classes.nail}><img src='./images/image-product-1-thumbnail.jpg'/></div>
        <div className={classes.nail}><img src='./images/image-product-2-thumbnail.jpg'/></div>
        <div className={classes.nail}><img src='./images/image-product-3-thumbnail.jpg'/></div>
        <div className={classes.nail}><img src='./images/image-product-4-thumbnail.jpg'/></div>
      </div>

      
    </div>
  )
}

export default Gallery