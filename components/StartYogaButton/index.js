import Link from "next/link";
import styles from './StartYoga.module.css'
import Image from "next/image";
export default function StartYogaButton() {
    return(
        <>
        <div>
           <Link href="startYogaPage">
            <button className={styles.button}>Start Yoga</button>
            </Link>
        </div>
        </>
    )
}