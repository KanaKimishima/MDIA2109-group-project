import Link from "next/link";
import styles from 'styles/Quizresult1.module.css'
import Head from "next/head";

export default function Result1 () {
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
