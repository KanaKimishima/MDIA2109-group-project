import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import styles from 'styles/NatureSounds.module.css'
import PlayPause from "../components/PlayPauseButton";
import PauseButton from "@/components/PauseButton";
import Previous from "@/components/PreviousButton";
import GoBackButton from "@/components/GoBackButton";
import SecondAudioPlayer from "@/components/SecondAudioPlayer";
export default function NatureSound() {
    return(
       <>
       <div className={styles.mainContent}>
        <div className={styles.topBar}>
            <Link href='/mainContent'><GoBackButton/></Link>
            <h1 className={styles.pageTitle}>Nature Sound</h1>
        </div>
        <Image src='/images/NatureSoundsImages.png'
        width={400}
        height={500}/>
      
     <SecondAudioPlayer/>
   

       
        
        <NavBar/>
        </div>

        </>
    )
}