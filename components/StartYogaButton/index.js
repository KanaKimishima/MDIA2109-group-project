import Link from "next/link";
import styles from 'components/StartYogaButton/StartYoga.module.css'
import Image from "next/image";
export default function StartYoga() {
    return(
        <>
        <div>
           
            <button className={styles.button}>Start Yoga</button>
        </div>
        </>
    )
}