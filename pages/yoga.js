import StartYoga from '@/components/StartYogaButton'
import Link from 'next/link'
import styles from 'styles/Yoga.module.css'
import Image from 'next/image'
import NavBar from '@/components/NavBar'

export default function Yoga () {
    return(
        <>
        <div className={styles.main_content}>
         <Image src="/images/Calming_sounds.png"
         width={200}
         height={150}/>
         <p className={styles.paragraph}>Yoga has been shown to be an effective way to reduce stress and improve overall well-being. Through a combination of physical postures, breathing exercises, and meditation, yoga can help lower the levels of stress hormones in the body and promote feelings of relaxation and calmness. Regular practice of yoga has also been linked to improvements in mood, sleep quality, and overall mental health, making it a valuable tool for managing stress in daily life.</p>
        <Link href='/start_yoga'>
        <StartYoga/>
        </Link>
        </div>
        <NavBar/>
       
        </>
    )
}