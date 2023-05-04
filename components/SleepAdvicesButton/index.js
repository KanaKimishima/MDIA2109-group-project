import Link from "next/link";
import styles from 'components/SleepAdvicesButton/SleepAdvicesButton.module.css'
export default function SleepAdvicesButton() {
    return(
        <>
        <Link href="/sleepAdvices">
        <button className={styles.button}>Tips for Better Sleep</button>
        </Link>
        </>
    )
}