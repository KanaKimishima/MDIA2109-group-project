import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import styles from './styles.module.css';

const Game_Link = () => {
  const linkContents = [
    (
      <></>
    ),
    (
      <></>
    ),
    (
      <>
      </>
    )
  ]
  return (
    <div>
      <h3>Some text at the top</h3>
      <Image alt='image at the center' ></Image>
      <div>
        <Link>Play</Link>
      </div>
    </div>
  )
}

export default Game_Link