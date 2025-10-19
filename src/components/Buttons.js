import React from 'react'
import styles from "./Buttons.module.css"

export const Buttons = ({onButtonClick}) => {

  const arr = [
    'C', '⌫', 'x²', '√x',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className={styles.buttons}>
      
      {arr.map((i)=> ( 
        <button className={styles.myButton} onClick={()=> onButtonClick(i)}>{i}</button>
      ))}
    
    </div>
  )
}
