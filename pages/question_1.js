import Link from 'next/link'
import styles from 'styles/Question_1.module.css'
import { useState } from 'react'

export default function Question_1 () {
    return (
        <>
        <h1>How old are you?</h1>
        <input></input>
        <Link href='/question_2'>
            <button>Next</button>
            </Link>
        
        </>
    )
}