import Link from 'next/link'
import styles from 'styles/physical_relaxation.module.css'

export default function Physical_relaxation () {
    return(
        <>
        <Link href='/yoga'>
        <button>Yoga</button>
        </Link>
        <Link href='/meditation'>
        <button>Meditation</button>
        </Link>
        </>
    )
}