import styles from 'components/CountingSheepButton/CountingSheepButton.module.css'
import Link from 'next/link'
export default function CountingSheepButton(){
    return(
        <>
        <Link href="/countingSheep">
        <button className={styles.button}>Counting Sheep</button></Link>
        </>
    )
}