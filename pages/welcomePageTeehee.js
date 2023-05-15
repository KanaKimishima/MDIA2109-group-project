import Link from 'next/link'
import styles from 'styles/Welcome.module.css'
import Head from 'next/head'
import lottie from 'lottie-web'
import { createRef, useEffect } from 'react'


export default function LandingPage () {
    
    let animationContainer = createRef();

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            rerender: "svg",
            loop: true,
            autoplay: true,
            path: "/animations/data.json"
        })

        return () => anim.destroy();
    }, [])

    return (
        <>

            <h1>Welcome back</h1>
            <div className={styles.inputs}></div>
            <input placeholder='Enter Email'/>
            <input placeholder='Enter Password'/>
            <Link href='/mainContent'>
                <button>Sign Up</button>
            </Link>
            <h3>Forgot Password?</h3>
            <Link href='/forgot_password'>
                <h3>Click here</h3>
            </Link>
            <div className={styles.animation__container} ref={animationContainer}/>
        </>
    )
}