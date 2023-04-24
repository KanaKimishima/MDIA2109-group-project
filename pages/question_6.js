import Link from 'next/link'
import styles from 'styles/Question6.module.css'

export default function Question_6 () {
    return (
        <>
        <h1>Do you feel anxious or depressed?</h1>
        
        <button>Never</button>
        <button>Sometimes</button>
        <button>often</button>
        <button>Almost Always</button>
        <Link href='/question_7'>
            <button>See The Result</button>
            </Link>
        </>
    )
}