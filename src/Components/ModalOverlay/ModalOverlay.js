import React, {useState} from 'react'
import classes from './ModalOverlay.module.css'

const ModalOverlay = (props) => {

  // const [modalOn, setModalOn] =useState(true)
   
  // const closeModal=()=>{
  //   setModalOn(false)
  // }

  return (
   <>
   <div className={classes.backdrop} onClick={props.closeMenu} > 
       <div className={classes.wrap}>
          <div className={classes.closeIcon}>
            <img src='./images/icon-close.svg' onClick={props.closeMenu}/>
          </div>
          <nav className={classes.modalnav}> 
           <ul>
               <li>Collections</li>
               <li>Men</li>
               <li>Women</li>
               <li>About</li>
               <li>Contact</li>
           </ul>
       </nav>
       </div>
       </div>
   </>
  )
}

export default ModalOverlay