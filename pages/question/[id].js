import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const question = (props) => {
const answers =[
    ["Very Good","Good","Moderate","Bad","Very Bad"],
    ["Never","Sometimes","Often","Almost Always"]
]
  
  const [answer, setAnswer] = useState("");

  function handleClick(e) {
    console.log(e.target.innerHTML)
    setAnswer(e.target.innerHTML);
}
  
const router = useRouter()
  

  return (
    <div>
      <h1>question page : {router.query.id}</h1>
      <br />
      <div>
          <h2>question prompt - props</h2>
      {
        props.isFirstQuestion
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
          <div>{ <div>{
                answers[1].map(a => (
                  <div key={a} onClick={handleClick}>
                    {a}
                  </div>
                ))
              }</div>}</div>  
        )
      }
      </div>
      {
        parseInt(router.query.id) < 6
          ?
          (
            <Link href={`${parseInt(router.query.id) + 1}`}>
              Next Question
            </Link>
          )
          : (
            // depending on the total number of often and almost Always
            // the value of the query param is determined
            <Link href={`result/${parseInt(router.query.id) + 1}`}>
              See the result
            </Link>
          )
      }
    </div>
  )
}

export default question