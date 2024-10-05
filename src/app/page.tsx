"use client"
import Image from "next/image";
import Card from "./components/card";
import Link from "next/link";
import Header from "./components/header";
import { useRouter } from "next/navigation"
import Aboutpage from "./About/page";
import "./globals.css"

export default function home()
 {
  const router=useRouter()
  return (
    <div>
    <div className= "h-20 bg-purple-300"><h1>hello world</h1></div>
    <Aboutpage/>
    <Header/>
    <div className= "max-w-40 bg-purple-300"><Card name='wamiq'rollnumber='2030'day='monday'timming='2 to 5'/></div>
    <br/>
    <div className= 'w-60 bg-green-200'><Card name='wali'rollnumber='1234'day='tuesday'timming='9 to 12'/></div>
    <br/>
    <div className= 'w-80  bg-lime-200'><Card name='anaya'rollnumber='5678'day='wednesday'timming='6 to 9'/></div>
<button onClick={()=>router.push('/Aboutpage')}>go to about page</button>
</div>
  );
}



/*import React from 'react'
//import "./globals.css"


const page = () => {
  return (
    <div className="bg-violet-800">sana</div>
  )
}

//export default page*/

