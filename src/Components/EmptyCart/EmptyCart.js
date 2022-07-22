import React from 'react'
import classes from './EmptyCart.module.css'


const EmptyCart = () => {
  return (
    <div className={classes.emptyCart}>
        <div className={classes.cartheader}> <h4>Cart </h4></div>
        <hr/>
        <div className={classes.items}> <p>Your cart is Empty</p></div>
    </div>
  )
}

export default EmptyCart