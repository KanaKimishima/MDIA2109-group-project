import Link from "next/link";
import styles from 'styles/Quizresults.module.css'
import Head from "next/head";

export default function Results () {
    return (
        <>
        <h1>Seems like you need to be more active.</h1>
        <p>Recommended actions for you</p>
        <Link href='/home_page'>
        <button>Next</button>
        </Link>
        </>
    )
}
