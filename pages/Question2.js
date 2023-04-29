import Link from 'next/link'
import styles from 'styles/Question2.module.css'

export default function Question2 () {
    return (
        <>
        <h1>Are you:</h1>
    
        <button>Student</button>
        <button>Employed</button>
        <button>Unemployed</button>
        <Link href='/Question3'>
        <button>Next</button>
        </Link>
        </>
    )
}