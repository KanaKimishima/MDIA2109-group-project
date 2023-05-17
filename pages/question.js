import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Answers from '@/components/Answers'
import styles from  '@/styles/Question.module.css'
import NavBar from '@/components/NavBar'

const question = () => {
  const questions = [
    "How are you feeling today?",
    "How often Do you struggle to fall asleep at night?",
    "How often do you feel overwhelmed with your life?",
    "How often do you experience physical symptoms such as headaches or muscle tension due to stress?",
    "How often do you feel you don't have much time to relax?",
    "How often do you feel anxious or worried?",
    "How often do you feel irritable or easily agitated"
  ]
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState(0);
  const [counter, setCounter] = useState(0);

  const handleClick = (e) => {
    console.log(e.target.innerHTML)
    setAnswer(e.target.innerHTML);
  };

  const onNextQuestionClick= () =>{
    if (answer === "Often" || answer === "Almost Always") {
      setCounter(counter + 1);
    }
    setQuestion(question + 1);
  };
  
  const countAnswers = () => {
    let result;
    if (counter < 2) {
      result = 1;
    }
    else if (counter == 3 || counter == 4) {
      result = 2;
    } else {
      result = 3;
    }
    return result;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.question}>{ questions[question] }</h1>
      <br />
      <div>
        
        <Answers currentQuestion={question} setAnswer={handleClick} />
      </div>
      {
        question < 6
          ?
          (
            <button className={styles.nextQ} onClick={onNextQuestionClick} >
              Next Question
            </button>
          )
          : (
            // depending on the total number of often and almost Always
            // the value of the query param is determined
            <Link href={`result/${countAnswers()}`}>
              See the result
            </Link>
          )
      }
      <NavBar/>
    </div>
  )
}

export default question