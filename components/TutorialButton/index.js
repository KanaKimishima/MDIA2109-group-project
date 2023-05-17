import Link from "next/link";
import styles from './TutorialButton.module.css'
export default function TutorialButton() {
    return(
        <>
        <Link href='/tutorial'>
            <button className={styles.button}>Tutorial</button>
        </Link>
        </>
    )
}