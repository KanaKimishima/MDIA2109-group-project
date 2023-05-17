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
            <Link href='/mainContent'>
            <div className={styles.animation__container} ref={animationContainer}/>
            </Link>
        </>
    )
}