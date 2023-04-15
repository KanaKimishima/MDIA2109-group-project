import Link from "next/link";
import styles from 'styles/Quizresults.module.css'
import Head from "next/head";

export default function Results () {
    return (
        <>
        <h1>Your results are:</h1>
        <Link href='/home_page'>
        <button>Next</button>
        </Link>
        </>
    )
}