import Link from 'next/link'
import styles from 'styles/Question_5.module.css'

export default function Question_5 () {
    return(
        <>
        <h1>Do you feeling fatigued or tired?</h1>
        
        <button>Never</button>
        <button>Sometimes</button>
        <button>often</button>
        <button>Almost Always</button>
        <Link href='/question_6'>Next Question</Link>
        </>
    )
}