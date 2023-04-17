import Link from "next/link";
import Image from "next/image";
import styles from 'components/Play_pause_button/Pause_play.module.css'
export default function Pause_Play() {
    return(
        <>
        <button>
            <Image src='/icons/Pause_button.png'/>
        </button>
        </>
    )

}