import React from "react";
import ButtonCss from '../components/buttons.module.css';

const Buttons=()=>{
  return(
    <div className={ButtonCss.buttons}>
      
      <button className={ButtonCss.button1}>1</button>
      <button className={ButtonCss.button2}>2</button>
      <button className={ButtonCss.button3}>3</button>
      <button className={ButtonCss.button4}>4</button>
      <button className={ButtonCss.button5}>5</button>
    </div>
  )
}

export default Buttons;