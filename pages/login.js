import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Login.module.css'
import Link from 'next/link'
import InputBoxes from '../components/InputBoxes'
import Nav from '@/components/NavBar'



export default function Login() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Pause" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <InputBoxes />
      </main>
    </>
  )
}