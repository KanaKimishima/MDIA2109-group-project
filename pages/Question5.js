import Link from 'next/link'
import styles from 'styles/Question5.module.css'

export default function Question5 () {
    return(
        <>
        <h1>In the past 30 days how often did you feel anxious, nervous or on the edge?</h1>
        <button>1-2 Day in a week</button>
        <button>3-4 Days in a week</button>
        <button>Every day</button>
        <Link href='/question_6'>Next</Link>
        </>
    )
}