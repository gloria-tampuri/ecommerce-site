import React,{useState} from 'react'
import classes from './Gallery.module.css'

const Gallery = () => {
 const [focusImage, setFocusImage] = useState('/images/image-product-1.jpg')

  const changeShoe1=()=>{
    setFocusImage('/images/image-product-1.jpg')
  }

 const changeShoe2=()=>{
  setFocusImage('/images/image-product-2.jpg')
 }

 const changeShoe3=()=>{
  setFocusImage('/images/image-product-3.jpg')
 }

 const changeShoe4=()=>{
  setFocusImage('/images/image-product-4.jpg')
 }

  return (
    <div className={classes.cover}>
      <div className={classes.focus}>
        <img src={focusImage} alt='image1'/>
      </div>
      <div className={classes.thumbnail}>
        <div className={classes.nail}><img src='./images/image-product-1-thumbnail.jpg' alt='shoeImage' onClick={changeShoe1}/></div>
        <div className={classes.nail}><img src='./images/image-product-2-thumbnail.jpg' alt='shoeImage1'  onClick={changeShoe2}/></div>
        <div className={classes.nail}><img src='./images/image-product-3-thumbnail.jpg'  alt='shoeImage3'  onClick={changeShoe3}/></div>
        <div className={classes.nail}><img src='./images/image-product-4-thumbnail.jpg'   alt='shoeImage2'  onClick={changeShoe4}/></div>
      </div>
      
      <div className={classes.frontBack}>
      <div className={classes.previous}><img src='/images/icon-previous.svg' alt='icon-previous'/></div>
      <div className={classes.next}> <img src='/images/icon-next.svg' alt='icon-next'/></div>
      </div>
      
    </div>
  )
}

export default Gallery