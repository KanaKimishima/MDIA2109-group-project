import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import styles from 'styles/NatureSounds.module.css'
import PlayPause from "../components/PlayPauseButton";
export default function NatureSound() {
    return(
        <>
        <div className={styles.music_container}>
            <Image src='/images/Nature.jpeg'
     width={400}
     height={400}/>
        <PlayPause/>
        </div>
        <NavBar/>

        </>
    )
}