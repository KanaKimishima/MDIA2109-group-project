import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Answers from '@/components/Answers'

const question = () => {
  const questions = [
    "How are you feeling today?",
    "How aften Do you struggle to fall asleep at night?",
    "How often do you feel overwhelmed with your life?",
    "How often do you work out?",
    "How often do you feel anxious or worried?",
    "question6",
    "question7"
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
    <div>
      <h1>{ questions[question] }</h1>
      <br />
      <div>
        <h2>...</h2>
        <Answers currentQuestion={question} setAnswer={handleClick} />
      </div>
      {
        question < 6
          ?
          (
            <button onClick={onNextQuestionClick} >
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
    </div>
  )
}

export default question