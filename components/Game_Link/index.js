import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import styles from './styles.module.css';

const Game_Link = ({ gameId }) => {
  const linkContents = [
    (
      //Yoga
      <>
      <h2>Seems like you need to be more active.</h2>
      <p>Recommended actions for you</p>
        <Link  href="/yoga">
          <Image className={styles.logo} src='/images/yogaresult.png'
          width={300}
          height={350}>
          </Image>
        </Link>
      </>
    ),
    (
      //sound
      <>
      <h2>Seems like you need to relax.</h2>
      <p>Recommended actions for you</p>
        <Link  href="/calmingNoiseSounds">
          <Image className={styles.logo} src='/images/soundsimg.png'
          width={300}
          height={400}>
          </Image>
        </Link>
      </>
    ),
    (
      //count sheep
      <>
      <h2>Seems like you don't get enough sleep.</h2>
      <p>Recommended actions for you</p>

      <div>
        <p>Simple tasks can help relieve stress.</p>
        <p>Play the game of counting sheep!</p>
        <Link  href="/sheepanimation">
          <Image className={styles.logo} src='/images/counting.png'
          width={300}
          height={350}>
          </Image>
        </Link>
      </div>
      
      </>
    )
  ]
  return (
    <div>
      <h3> {linkContents[gameId - 1]} </h3>
      <div>
        <Link href="/playSomeGame"></Link>
      </div>
    </div>
  )
}

export default Game_Link