import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import styles from 'styles/NatureSounds.module.css'
import PlayPause from "../components/PlayPauseButton";
import PauseButton from "@/components/PauseButton";
import Previous from "@/components/PreviousButton";

import AudioPlayer from "@/components/AudioPlayer";
export default function NatureSound() {
    return(
       <>
       <div className={styles.mainContent}>
        <Image src='/images/CalmingSoundsImages.png'
        width={400}
        height={500}/>
      
     <AudioPlayer/>
   

       
        
        <NavBar/>
        </div>

        </>
    )
}