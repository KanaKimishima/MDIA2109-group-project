import Link from 'next/link'
import styles from 'styles/Yoga.module.css'
import StartYogaButton from '@/components/StartYogaButton'
import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Yoga () {
    return(
        <>
        <div className={styles.mainContent}>
         <Image src='/images/Yoga.png'
        width={400}
        height={300}/>
        <div className={styles.paragraph}>
        Yoga has been shown to be an effective way to reduce stress and improve overall well-being. Through a combination of physical postures, breathing exercises, and meditation, yoga can help lower the levels of stress hormones in the body and promote feelings of relaxation and calmness. Regular practice of yoga has also been linked to improvements in mood, sleep quality, and overall mental health, making it a valuable tool for managing stress in daily life.
        </div>
        <Link href='/startYogaPage'>
        <StartYogaButton/>
        </Link>
        </div>
        <NavBar/>
       
        </>
    )
}