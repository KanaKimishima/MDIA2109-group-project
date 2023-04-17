import Link from 'next/link'
import styles from 'styles/Question_3.module.css'

export default function Question_3 () {
    return(
        <>
        <h1>How often do you feel overwhelmed with your life?</h1>
        
        <button>Never</button>
        <button>Sometimes</button>
        <button>often</button>
        <button>Almost Always</button>
        <Link href='/question_4'>Next Question</Link>
        </>
    )
}