import styles from 'components/CountingSheepButton/CountingSheepButton.module.css'
import Link from 'next/link'
export default function CountingSheepButton(){
    return(
        <>
        <Link href="/CountingSheep">
        <button className={styles.button}>Counting Sheep</button></Link>
        </>
    )
}