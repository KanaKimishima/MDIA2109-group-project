import Link from 'next/link'
import Head from 'next/head'
import Sound from '@/components/Sound_button'
import Yoga from '@/components/Yoga_button'
import Sleep from '@/components/BetterSleepButton'
import Quiz from '@/components/Quiz_button'
import styles from '@/styles/Home.module.css'

export default function HomePage() {
    return(
        <>
        <div className={styles.home_buttons}>
        <div className={styles.first_column_buttons}>
        <Link href='/calming_sounds'>
        <Sound/>
        </Link>
        <Link href='/better_sleep'>
        <Sleep/>
        </Link>
        </div>
        <div className={styles.second_column_buttons}>
        <Link href='/yoga'>
        <Yoga/>
        </Link>
        <Link href='/quizHome'>
        <Quiz/>
        </Link>
        </div>

        </div>
     
        </>
    )
}