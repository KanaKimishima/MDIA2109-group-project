import Link from 'next/link'

import Head from 'next/head'

export default function Main_content() {
    return(
        <>
        <Link href='/calming_sounds'>
        <button>Calming Sounds</button>
        </Link>
        <Link href='/better_sleep'>
        <button>Better Sleep</button>
        </Link>
        <Link href='/physical_relaxation'>
        <button>Physical Relaxation</button>
        </Link>
        <Link href='/contact_professional'>
        <button>Contact Professional</button>
        </Link>
        </>
    )
}