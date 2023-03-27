import Link from 'next/link'


export default function Welcome_page () {
    return (
        <>

        <Link href='/quiz'>
            <button>Start Quiz</button>
            </Link>
            <Link href='/tutorial'>
            <button>Tutorial</button>
            </Link>
        
        </>
    )
}