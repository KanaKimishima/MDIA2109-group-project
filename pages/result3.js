import Link from "next/link";
import styles from 'styles/Quizresult3.module.css'
import Head from "next/head";

export default function Result3 () {
    return (
        <>
        <h1>Seems like you need to relax.</h1>
        <p>Recommended actions for you</p>
        <Link href='/home_page'>
        <button>See more Result</button>
        </Link>
        </>
    )
}