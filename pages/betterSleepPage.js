import Link from 'next/link'
import NavBar from '@/components/NavBar'
import SleepAdvicesButton from './SleepAdvicesButton'
import styles from '@/styles/Bettersleep.module.css'
import CountingSheepButton from '@/components/CountingSheepButton'
import Image from 'next/image'

export default function BetterSleepPage () {
    return(
        <>
        <Image src='/graphics/BetterSleep-2.png'
        width={295}
        height={217}/>

        <div className={styles.buttons}>
      <SleepAdvicesButton/>
      <CountingSheepButton/>
      </div>
      
        <NavBar/>
        </>
    )
}