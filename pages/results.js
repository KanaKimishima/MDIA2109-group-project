import Link from "next/link";
import styles from 'styles/Quizresults.module.css'
import Head from "next/head";

export default function Results () {
    return (
        <>
        <h1>Your results are:</h1>
        <Link href='/main_content'>
        <button>Next</button>
        </Link>
        </>
    )
}