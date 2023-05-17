import styles from './GetStarted.module.css'
import Link from 'next/link'
export default function GetStarted(){
    return(
        <>
        <Link href='/login'>
        <button className={styles.button}>Get Started</button>
        </Link>
        </>
    )
}
