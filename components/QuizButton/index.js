import Image from "next/image";
import Link from "next/link";
import styles from 'components/QuizButton/QuizButton.module.css'
export default function QuizButton() {
    return(
        <>
        <button className={styles.quiz_button}>
            <p className={styles.button_name}>Quiz</p>
        <Image className={styles.quiz_icon} src="/icons/quiz_icon.png" 
        width={39}
        height={39}/>

        </button>
        </>
    )
}