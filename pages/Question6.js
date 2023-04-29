import Link from 'next/link'
import styles from 'styles/Question6.module.css'

export default function Question6 () {
    return (
        <>
        <h1>Do you have difficulties fallingg asleep?</h1>
        <button>Yes</button>
        <button>No</button>
        <Link href='/Question7'>
            <button>Next</button>
            </Link>
        </>
    )
}