import Link from "next/link";
import styles from 'components/SleepAdvicesButton/SleepAdvicesButton.module.css'
export default function SleepAdvicesButton() {
    return(
        <>
        <Link href="/sleepAdvicesPeople">
        <button className={styles.button}>Tips for Better Sleep</button>
        </Link>
        </>
    )
}