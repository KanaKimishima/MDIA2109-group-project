import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from 'components/PlayPauseButton/PausePlay.module.css'
export default function PlayPause() {
    const[image, changeImage] = useState(<Image src='/icons/Pause_button.png' width={100} height={100}/>)
    return(
        <>
     <button className={styles.play}  onClick={() => changeImage(<Image src='/icons/Play_button.png'
     width={70}
     height={70}/> )}>
         <Image src='/icons/Previous_button.png'
     width={70}
     height={70}/>
   
   <Image src='/icons/Play_button.png'
     width={70}
     height={70}/>
     <Image src='/icons/Next_button.png'
     width={70}
     height={70}/>
   
     </button>
   
     
     
        </>
    )

}