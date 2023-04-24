import Link from 'next/link'
import styles from 'styles/Question_2.module.css'

export default function Question_2 () {
    return (
        <>
        <h1>Do you struggle to fall asleep at night?</h1>
    
        <button>Never</button>
        <button>Sometimes</button>
        <button>often</button>
        <button>Almost Always</button>
        <Link href='/question_3'>
        <button>Next Question</button>
        </Link>
        </>
    )
}