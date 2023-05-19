import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/RainSounds.module.css'
import AudioPlayer from "@/components/AudioPlayer";
export default function RainSound() {
    return(
        <>
        <div className={styles.mainContainer}>
            <div className={styles.topBar}>
                <h1 className={styles.pageTitle}>Rain Sound</h1>
            </div>
         <Image src='/images/CalmingSoundsImages.png'
        width={400}
        height={500}/>
        <AudioPlayer/>

        <NavBar/>
        </div>

        </>
    )
}