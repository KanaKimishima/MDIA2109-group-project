import React from 'react'
import Link from 'next/link'
import Game_Link from '@/components/Game_Link'
import { useRouter } from 'next/router'

const result = (props) => {
  const { id } = useRouter().query;
  return (
    <div>
      <h1>result</h1>
      <div>
        Recommended actions for you
      </div>
      <Game_Link gameId={id} />
      <div>
        <Link href="/home_page">
          Contents See more
        </Link>
        <Link href="/contact_professional">
          learn More
        </Link>
      </div>
    </div>
  )
}

export default result