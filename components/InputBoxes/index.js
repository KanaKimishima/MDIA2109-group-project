import { useState } from 'react'
import styles from './InputBoxes.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sign_Up() {
    return(
        <>
        <h1>Sign Up</h1>
        <div className={styles.inputs}>
        <input placeholder='Enter Full Name'/>
        <input placeholder='Enter Username'/>
        <input placeholder='Enter Email'/>
        <input placeholder='Enter Password'/>
        <input placeholder='Re-enter Password'/>

        </div>
        </>
    )
}