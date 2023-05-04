import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from 'components/PlayPauseButton/PausePlay.module.css'
export default function PlayPause() {
    const[button, changeButton] = useState(<Image src='/icons/Pause_button.png' width={100} height={100}/>)
    return(
        <>
        <div>
        <button onClick={() => changeButton(" <Image src='/icons/Pause_button.png' width={100} height={100}/>")}><Image src='/icons/Play_button.png' width={100} height={100}/>
         </button>
        
        </div>
        </>
    )

}