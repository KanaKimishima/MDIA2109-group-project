import Link from "next/link";
import Image from "next/image";
import styles from 'components/PlayPauseButton/PausePlay.module.css'
export default function Pause_Play() {
    return(
        <>
        <button>
            <Image src='/icons/Pause_button.png'/>
        </button>
        </>
    )

}