import styles from 'styles/SheepAnimation.module.css'
import Link from "next/link";
import Image from "next/image";
import lottie from 'lottie-web'
import NavBar from '@/components/NavBar';
import { createRef, useEffect } from 'react'

export default function SheepAnimation() {
    let animationContainer = createRef();

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            rerender: "svg",
            loop: true,
            autoplay: true,
            path: "/animationTwo/data3.json"
        })
        return () => anim.destroy();
    }, [])
  
    return(
        <>

<div className={styles.animation__container} ref={animationContainer}/>
<NavBar/>
        </>
    )
    
}