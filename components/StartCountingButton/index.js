import Image from "next/image";
import Link from "next/link";
import styles from 'components/StartCountingButton/StartCountingButton.module.css'
export default function StartCountingButton() {
    return(
        <>
        <button className={styles.button}>Start Counting</button>
        </>
    )
}