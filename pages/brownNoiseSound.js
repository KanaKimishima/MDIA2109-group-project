import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/BrownNoise.module.css'
import ThirdAudioPlayer from "@/components/ThirdAudioPlayer";

export default function BrownNoise() {
    return(
        <>
        <div className={styles.mainContent}>
         <Image src='/images/BrownNoise.png'
        width={400}
        height={500}/>
        <ThirdAudioPlayer/>
        <NavBar/>
        </div>

        </>
    )
}