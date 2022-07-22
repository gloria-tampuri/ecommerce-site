import React from 'react'
import classes from './Gallery.module.css'

const Gallery = () => {
  return (
    <div className={classes.cover}>
      <div className={classes.focus}>
        <img src='/images/image-product-1.jpg' alt='image1'/>
      </div>
      <div className={classes.thumbnail}>
        <div className={classes.nail}><img src='./images/image-product-1-thumbnail.jpg' alt='shoeImage' /></div>
        <div className={classes.nail}><img src='./images/image-product-2-thumbnail.jpg' alt='shoeImage1'/></div>
        <div className={classes.nail}><img src='./images/image-product-3-thumbnail.jpg'  alt='shoeImage3'/></div>
        <div className={classes.nail}><img src='./images/image-product-4-thumbnail.jpg'   alt='shoeImage2'/></div>
      </div>
      
      <div className={classes.frontBack}>
      <div className={classes.previous}><img src='/images/icon-previous.svg' alt='icon-previous'/></div>
      <div className={classes.next}> <img src='/images/icon-next.svg' alt='icon-next'/></div>
      </div>
      
    </div>
  )
}

export default Gallery