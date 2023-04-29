import Link from 'next/link'
import styles from 'styles/Question1.module.css'
import { useState } from 'react'

export default function Question1 () {
    return (
        <>
        <h1>How old are you?</h1>
        <input></input>
        <Link href='/Question2'>
            <button>Next</button>
            </Link>
        
        </>
    )
}