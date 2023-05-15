import Link from 'next/link'

import Head from 'next/head'
import styles from 'styles/Login.module.css'

export default function Login() {
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

      

        
       
       
        <Link href='/welcomePageTeehee'>
        <button>Sign Up</button>
        </Link>
      
        </>
    )
}