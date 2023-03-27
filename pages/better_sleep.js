import Link from 'next/link'


export default function Better_sleep () {
    return(
        <>
        <Link href='/sleep_advices'>
        <button>Sleep Advices</button>
        </Link>
        <Link href='/counting_sheep'>
        <button>Counting Sheep</button>
        </Link>
        </>
    )
}