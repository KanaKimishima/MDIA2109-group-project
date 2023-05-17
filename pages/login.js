import Link from 'next/link'
import SignUp from '@/components/SignUpButton'

import Head from 'next/head'
import styles from 'styles/Login.module.css'

export default function Login() {
    return(
        <>
        <h1 className={styles.title}>Sign Up</h1>
        <div className={styles.mainContent}>
        <div className={styles.inputs}>
        <input placeholder='Enter Full Name'/>
        <input placeholder='Enter Username'/>
        <input placeholder='Enter Email'/>
        <input placeholder='Enter Password'/>
        <input placeholder='Re-enter Password'/>

        </div>

       <Link href='/welcomePageTeehee'>
       <SignUp/>
        </Link>
        </div>
      
        </>
    )
}