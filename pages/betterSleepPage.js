import Link from 'next/link'
import NavBar from '@/components/NavBar'
import SleepAdvicesButton from '@/components/SleepAdvicesButton'
import styles from '@/styles/Bettersleep.module.css'
import CountingSheepButton from '@/components/CountingSheepButton'
import Image from 'next/image'
import GoBackButton from '@/components/GoBackButton'

export default function BetterSleepPage () {
    return(
        <>
        <div className={styles.mainContent}> 
        <div className={styles.topBar}>
          <Link href='/mainContent'>
          <GoBackButton/>
          </Link>
          <h1 className={styles.pageTitle}>Better Sleep</h1>
        </div>
        <Image className={styles.graphic} src='/graphics/BetterSleep-2.png'
        width={295}
        height={217}/>

        <div className={styles.buttons}>
      <SleepAdvicesButton/>
      <CountingSheepButton/>
      </div>
      
        <NavBar/>
        </div>
        </>
    )
}