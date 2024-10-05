import Link from 'next/link'
import React from 'react'

const Aboutpage = () => {
  return (
    <div>
      this is about page
      < Link href='/navebar'><h1>this is navebar</h1></Link>
      <br/>
      <Link href='/conact'><h1>this is my contact anaya</h1></Link>
    </div>
  )
}

export default Aboutpage

