import Link from 'next/link'
import SignUp from '@/components/SignUpButton'

import Head from 'next/head'
import styles from 'styles/Login.module.css'

export default function Login() {
    return(
        <>
        <div className={styles.mainContainer}>
        <h1 className={styles.title}>Sign Up</h1>
       
        <div className={styles.inputs}>
        <input className={styles.nameinput} placeholder='Enter Full Name'/>
        <input className={styles.usernameinput} placeholder='Enter Username'/>
        <input className={styles.emailinput} placeholder='Enter Email'/>
        <input className={styles.passwordinput} placeholder='Enter Password'/>
        <input className={styles.reenterpasswordinput}placeholder='Re-enter Password'/>

        </div>

       <Link href='/welcomePageTeehee'>
       <SignUp/>
        </Link>
       
        </div>
      
        </>
    )
}