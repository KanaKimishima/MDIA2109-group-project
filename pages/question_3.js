import Link from 'next/link'
import styles from 'styles/Question_3.module.css'

export default function Question_3 () {
    return(
        <>
        <h1>Have you been under stress recently?</h1>
        <button>Yes</button>
        <button>No</button>
        <Link href='/question_4'>Next</Link>
        </>
    )
}