import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import styles from './styles.module.css';
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
        <div>{
          answers[0].map(a => (
            <div key={a}>
              {a}
            </div>
          ))
        }</div>
        )
          : (
        <div>{<div>
          {
                answers[1].map(a => (
                  <div key={a} onClick={setAnswer}>
                    {a}
                  </div>
                ))
              }</div>}</div>  
        )
    }
  </>)
}

export default Answers