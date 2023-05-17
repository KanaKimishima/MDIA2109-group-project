import Link from 'next/link'
import Head from 'next/head'
import Sound from '@/components/SoundButton'
import Yoga from '@/components/YogaButton'
import Sleep from '@/components/BetterSleepButton'
import QuizButton from '@/components/QuizButton'
import styles from '@/styles/MainContent.module.css'
import Search from '@/components/Search'
import NavBar from '@/components/NavBar'
import SettingsButton from '@/components/SettingsButton'
import Image from 'next/image'


export default function MainContent() {
    return(
        <>
        <div className={styles.main_container}>
        <div className={styles.header}>
        <SettingsButton className={styles.icon}/>
        </div>
        <Search/>

        <div className={styles.home_buttons}>
        <div className={styles.first_column_buttons}>
        <Link href='/calmingNoiseSounds'>
        <Sound/>
        </Link>
        <Link href='/betterSleepPage'>
        <Sleep/>
        </Link>
        </div>
        <div className={styles.second_column_buttons}>
        <Link href='/yoga'>
        <Yoga/>
        </Link>
        <Link href='/quizHome'>
        <QuizButton/>
        </Link>
        </div>

        </div>
        <div className={styles.quote_container}>
        <h1 className={styles.quote}>Relax!Life is beautiful</h1>
        </div>
        <Image className={styles.graphic} width={342} height={248} src="/graphics/RelaxGraphic.png"/>
        <NavBar/>
        </div>
     
        </>
    )
}