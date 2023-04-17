import Link from 'next/link'
import styles from 'styles/Question_4.module.css'

export default function Question_4 () {
    return(
        <>
        <h1>Do you feel irritable, annoyed, or angry over trivial issues?</h1>
        
        <button>Never</button>
        <button>Sometimes</button>
        <button>often</button>
        <button>Almost Always</button>
        <Link href='/question_5'>Next Question</Link>
        </>
    )
}
