import React, { useState } from 'react'
import EmptyCart from '../EmptyCart/EmptyCart'
import ModalOverlay from '../ModalOverlay/ModalOverlay'

import classes from './Header.module.css'

const Header = ({quantity}) => {

    const [isToggle, setIsToggle] = useState(false)
    const[menuToggle, setMenuToggle]=useState(false)

    //cart toogle
    const toggleCartHandler = () => {
        setIsToggle(!isToggle)
        console.log('Cart toogle');
    }

    const modalHandler=()=>{
        setMenuToggle(true)
    }

    const closeMenu=()=>{
        setMenuToggle(false)
    }
   

    return (
        <>
           { menuToggle && <ModalOverlay closeMenu={closeMenu} />}
            <div className={classes.headerContainer}>

                <div className={classes.leftHeader}>
                    <img src='/images/icon-menu.svg' alt='menu' onClick={modalHandler}/>
                    <div className={classes.logo}> sneakers</div>
                    <nav className={classes.bignavigation}>
                        <ul>
                            <li>Collections</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>

                <div className={classes.profile}>
                    <img src='/images/icon-cart.svg' alt='icon-cart' className={classes.cart} onClick={toggleCartHandler} />
                  {quantity > 0 &&  <div className={classes.numberInCart}>{quantity}</div>}
                    <img src='/images/image-avatar.png' alt='avatar'
                        className={classes.avatar} />
                </div>

            </div>
            {isToggle && <EmptyCart quantity={quantity} />}

        </>
    )
}

export default Header