import Link from 'next/link'

import Head from 'next/head'
import styles from 'styles/Login.module.css'
import SignUp from '@/components/SignUpButton'

export default function Main_content() {
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

      

        
       
       
        <Link href='/WelcomePage'>
       <SignUp/>
        </Link>
      
        </>
    )
}