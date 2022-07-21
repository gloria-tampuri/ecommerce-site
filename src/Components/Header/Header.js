import React from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.headerContainer}>
        
        <div className={classes.leftHeader}>
 <img src='/images/icon-menu.svg'/>
            <div className={classes.logo}> sneakers</div>
            <nav> 
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
            <img src='/images/icon-cart.svg' className={classes.cart}/>
            <img src='/images/image-avatar.png' className={classes.avatar}/>
        </div>

    </div>
  )
}

export default Header