import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Logo from '@/components/Logo'
import GetStarted from '@/components/GetStartedButton'
import TutorialButton from '@/components/TutorialButton'


export default function Home() {
  
  
  return (
    <>
      {/* <Head>
        <title>Pause</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className={styles.main}>
        <Logo/>
      <h1 className={styles.quote}>An escape from reality</h1>
       <GetStarted/>
       <TutorialButton/>
        
      </main>
    </>
  )
}