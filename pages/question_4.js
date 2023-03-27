import Link from 'next/link'
import styles from 'styles/Question_4.module.css'

export default function Question_4 () {
    return(
        <>
        <h1>How would you rate your stress level in the past month?</h1>
        <button>Low</button>
        <button>Medium</button>
        <button>High</button>
        <Link href='/question_5'>Next</Link>
        </>
    )
}
