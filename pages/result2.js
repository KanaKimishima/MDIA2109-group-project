import Link from "next/link";
import styles from 'styles/Quizresult2.module.css'
import Head from "next/head";

export default function Result2 () {
    return (
        <>
        <h1>Seems like you don't get enough sleep.</h1>
        <p>Recommended actions for you</p>
        <Link href='/home_page'>
        <button>Next</button>
        </Link>
        </>
    )
}