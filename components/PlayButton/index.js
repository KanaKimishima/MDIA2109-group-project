import Image from "next/image";
import Link from "next/link";
import styles from './PlayButton.module.css'
export default function PlayButton() {
    return(
        <>
        <button className={styles.play}>
        <Image src='/icons/Play_button.png'
     width={70}
     height={70}/>
        </button>
        </>
    )
}