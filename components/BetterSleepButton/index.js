import styles from 'BetterSleepButton.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function BeterSleep() {
    return(
        <>
           <div >
            <Link href='betterSleepPage'>
            <button className={styles.better_sleep_button}>
            <p className={styles.button_name}>Better Sleep</p>
        <Image className={styles.better_sleep_icon_icon} src="/icons/nights_stay.png" 
        width={39}
        height={39}/>
        </button>
        </Link>
        </div>
        </>
    )
}