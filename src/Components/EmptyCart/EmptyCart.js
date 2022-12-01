import React,{useState} from 'react'
import classes from './EmptyCart.module.css'
import Ordered from './Ordered'


const EmptyCart = ({quantity}) => {
 const [showCart, setShowCart] = useState(true)

 const updatecart =()=>{
  setShowCart(false)
 }


 let element;

 if(quantity > 0 && showCart){
   element = <Ordered quantity={quantity} updatecart={updatecart}/>
 }else{
  element = <div className={classes.items}> <p>Your cart is Empty</p></div> 
 }

  return (
    <div className={classes.emptyCart}>
        <div className={classes.cartheader}> <h4>Cart </h4></div>
        <hr/>
        {element}
    </div>
  )
}

export default EmptyCart