import React from "react";
import classes from './App.modules.css'
import Header from "./Components/Header/Header";
import HeroContainer from "./Components/HeroContainer/HeroContainer";
import ModalOverlay from "./Components/ModalOverlay/ModalOverlay";

function App() {
  return (
    <div className={classes.app} >
     
    <Header/>
   
    <HeroContainer/>
    </div>
  );
}

export default App;
