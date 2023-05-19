import React from 'react'
import Link from 'next/link'
import Game_Link from '@/components/Game_Link'
import { useRouter } from 'next/router'
import styles from '@/styles/Results.module.css'
import NavBar from '@/components/NavBar'

const result = (props) => {
  const { id } = useRouter().query;
  return (
    <div className={styles.container}>
      
      <Game_Link gameId={id} />

      <div className={styles.buttons}>
        <Link className={styles.seemore} href="/homepage">
          See More Contents
        </Link>

        <Link className={styles.learnmore} href="/contactProfessionalPeople">
          learn More
        </Link>
      </div>
      <NavBar/>
    </div>
    
  )
}

export default result