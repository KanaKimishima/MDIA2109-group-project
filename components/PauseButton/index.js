import Image from "next/image";
import Link from "next/link";
import styles from './PauseButton.module.css'
export default function PauseButton() {
    return(
        <>
        <button className={styles.pause}>
        <Image src='/icons/Pause_button.png'
     width={75}
     height={75}/>
        </button>
        </>
    )
}