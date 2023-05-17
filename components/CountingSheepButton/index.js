import styles from './CountingSheepButton.module.css'
import Link from 'next/link'
export default function CountingSheepButton(){
    return(
        <>
        <Link href="/countingSheepGame">
        <button className={styles.button}>Counting Sheep</button></Link>
        </>
    )
}