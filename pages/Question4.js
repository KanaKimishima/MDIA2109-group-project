import Link from 'next/link'
import styles from 'styles/Question4.module.css'

export default function Question4 () {
    return(
        <>
        <h1>How would you rate your stress level in the past month?</h1>
        <button>Low</button>
        <button>Medium</button>
        <button>High</button>
        <Link href='/Question5'>Next</Link>
        </>
    )
}
