import Link from 'next/link'
import styles from 'styles/Question3.module.css'

export default function Question3 () {
    return(
        <>
        <h1>Have you been under stress recently?</h1>
        <button>Yes</button>
        <button>No</button>
        <Link href='/Question4'>Next</Link>
        </>
    )
}