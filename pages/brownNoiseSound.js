import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/BrownNoise.module.css'
import ThirdAudioPlayer from "@/components/ThirdAudioPlayer";
import GoBackButton from "@/components/GoBackButton";

export default function BrownNoise() {
    return(
        <>
        <div className={styles.mainContent}>
            <div className={styles.topBar}>
                <Link href='/mainContent'>
                    <GoBackButton/>
                </Link>
                <h1 className={styles.pageTitle}>Brown Noise</h1>
            </div>
         <Image src='/images/BrownNoise.png'
        width={400}
        height={500}/>
        <ThirdAudioPlayer/>
        <NavBar/>
        </div>

        </>
    )
}