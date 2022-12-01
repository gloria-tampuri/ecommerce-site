import React, {useState} from "react";
import classes from './App.modules.css'
import Header from "./Components/Header/Header";
import HeroContainer from "./Components/HeroContainer/HeroContainer";
import ModalOverlay from "./Components/ModalOverlay/ModalOverlay";

function App() {
const[quantity,setQuantity]=useState(0)

const receiveQuantity=(num)=>{
  setQuantity(num)
}
console.log(quantity);
  return (
    <div className={classes.app} >
     
    <Header quantity={quantity}/>
   
    <HeroContainer receiveQuantity={receiveQuantity}/>
    </div>
  );
}

export default App;
