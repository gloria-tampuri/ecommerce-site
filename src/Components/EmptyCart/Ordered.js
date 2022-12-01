import React, { useState } from 'react'
import classes from './Ordered.module.css'

const Ordered = ({ quantity, updatecart }) => {

    const price = 125;

    const total = price * quantity

    const handleDelete=()=>{
        console.log('Loggggggg');
        return updatecart()
    }


    return (

        <>
            <div className={classes.ordered}>
                <div className={classes.image}>
                    <img src='./images/image-product-1-thumbnail.jpg' /></div>
                <div className={classes.writings}>
                    <p>Autumn Limited Edition...</p>
                    <p>${price.toFixed(2)}x <span>{quantity}</span> <span className={classes.total}> ${total.toFixed(2)}</span></p>
                </div>
                <div> <img src='/images/icon-delete.svg' onClick={handleDelete} /></div>
            </div>
            <div> <button> Checkout</button></div>
        </>
    )
}

export default Ordered