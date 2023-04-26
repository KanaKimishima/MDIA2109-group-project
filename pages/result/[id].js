import React from 'react'
import Link from 'next/link'
import Game_Link from '@/components/Game_Link'

const result = (props) => {
   
  return (
    <div>
      <h1>result</h1>
      <div>
        Two lines of text come here
      </div>
      <Game_Link />
      <div>
        <Link href="/someLink1">
          Contents See more
        </Link>
        <Link href="/someLink2">
          learn More
        </Link>
      </div>
    </div>
  )
}

export default result