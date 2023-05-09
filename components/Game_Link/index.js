import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import styles from './styles.module.css';

const Game_Link = ({ gameId }) => {
  const linkContents = [
    (
      <>
      <h2>Seems like you need to be more active.</h2>
      <p>Recommended actions for you</p>
      <h1>Yoga</h1>
      </>
    ),
    (
      <>
      <h2>Seems like you need to relax.</h2>
      <p>Recommended actions for you</p>
      <link rel=""></link>
      </>
    ),
    (
      <>
      <h2>Seems like you don't get enough sleep.</h2>
      <p>Recommended actions for you</p>

      <div>
        <p>Simple tasks can help relieve stress.</p>
        <p>Play the game of counting sheep!</p>¥
      </div>
      
      </>
    )
  ]
  return (
    <div>
      <h3> {linkContents[gameId - 1]} </h3>
      <Image alt='image at the center' ></Image>
      <div>
        <Link href="/playSomeGame">Play</Link>
      </div>
    </div>
  )
}

export default Game_Link