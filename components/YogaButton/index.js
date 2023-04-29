import styles from 'components/YogaButton/YogaButton.module.css'
import Image from 'next/image'
export default function Yoga () {
    return(
        <>
        <div >
        <button className={styles.yoga_button}>
            <p className={styles.button_name}>Yoga</p>
        <Image className={styles.quiz_icon} src="/icons/self_improvement.png" 
        width={39}
        height={39}/>

        </button>
        </div>
        </>
    )
}