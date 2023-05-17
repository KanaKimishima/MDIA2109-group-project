import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/RainSounds.module.css'
import SecondAudioPlayer from "@/components/SecondAudioPlayer";
export default function RainSound() {
    return(
        <>
        <div className={styles.mainContainer}>
         <Image src='/images/NatureSoundsImages.png'
        width={400}
        height={500}/>
        <SecondAudioPlayer/>

        <NavBar/>
        </div>

        </>
    )
}