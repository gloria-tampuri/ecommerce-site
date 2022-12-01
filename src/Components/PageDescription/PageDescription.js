import React, {useState}from 'react'
import classes from './PageDescription.module.css'

const PageDescription = ({receiveQuantity}) => {
const [quantity,setQuantity] =useState(0)

const addToQuantity=()=>{
  setQuantity(quantity + 1)
}

const subFromQuantity=()=>{
  setQuantity(quantity - 1)
}

const addtoCart=()=>{
  receiveQuantity(quantity);
}

  return (
    <div className={classes.wrap}>
      <h5>SNEAKER COMPANY</h5>
      <h1>Fall Limited Edition <br />Sneakers</h1>

      <p>These low-profile sneakers are your perfect casualwear
        campanion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
      </p>
      <div className={classes.pricing}>
        <p>$125.00 <span>50%</span></p>
        <p></p>
      </div>

      <div className={classes.addtoCart}>
        <div className={classes.plusorminus}>
        <div className={classes.increament} onClick={subFromQuantity}> <img src='./images/icon-minus.svg' /> </div>
        <div> <span>{quantity}</span></div>
        <div  className={classes.increament}  onClick={addToQuantity}> <img src='./images/icon-plus.svg' /></div>
      </div>

      <div className={classes.addtocartbtn} onClick={addtoCart}> 
      <div><img src='./images/icon-cart.svg' /></div>
      <div ><span>Add to cart</span></div>
      </div>
      </div>



    </div>
  )
}

export default PageDescription