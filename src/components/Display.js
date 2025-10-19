import React from 'react'
import styles from "./Display.module.css"

export const Display = ({calculation}) => {
  return (
    <div>
      
      <input className={styles.display} type='text' value={calculation} readOnly></input>
    
    </div>
  )
}