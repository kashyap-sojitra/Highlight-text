import React from 'react'
import HighlighterExample from '../src/Highlighter.example'
import styles from './Application.css'

export default function Application () {
  return (
    <div>
    
      <div className={styles.body}>
        <div className={styles.card}>
        <HighlighterExample/>
        </div>
      </div>
      
    </div>
  )
}
