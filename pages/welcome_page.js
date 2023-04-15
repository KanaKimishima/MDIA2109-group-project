import Link from 'next/link'
import styles from 'styles/Welcome.module.css'
import Head from 'next/head'



export default function Landing_page () {
    return (
        <>

            <h1>Welcome back</h1>
            <div className={styles.inputs}></div>
            <input placeholder='Enter Email'/>
            <input placeholder='Enter Password'/>
        <Link href='/home_page'>
            
            <button>Sign Up</button>
            </Link>
            <h3>Forgot Password?</h3>
            <Link href='/forgot_password'>
            <h3>Click here</h3>
            </Link>
            
          
        
        </>
    )
}