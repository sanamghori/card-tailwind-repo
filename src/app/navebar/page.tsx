import Link from 'next/link'
import React from 'react'

function navebar() {
  return (
    <div>
     <h1> this is navebar page</h1>
     <Link href='/contact'><h1>this is contact page</h1></Link>
    </div>
  )
}

export default navebar
