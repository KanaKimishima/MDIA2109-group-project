import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import styles from 'components/Answers/Answers.module.css'
import { useState } from 'react'

const Answers = ({ currentQuestion, setAnswer }) => {
  const answers = [
    ["Very Good", "Good", "Moderate", "Bad", "Very Bad"],
    ["Never", "Sometimes", "Often", "Almost Always"]
  ];

  return (
    <>
      { currentQuestion == 0 
    ? (
        <div className={styles.choices}>{
          answers[0].map(a => (
            <span className={styles.first} key={a} >{a}</span>
          ))
        }</div>
        )
          : (
        <div>{
          <div>
              {
                answers[1].map(a => (
                  <div className={styles.choice} key={a} onClick={setAnswer}>
                    <span className={styles.second}>{a}</span>
                  </div>
                ))
              }
              </div>}
        </div>  
        )
    }
  </>)
}

export default Answers