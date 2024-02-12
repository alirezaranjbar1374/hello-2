import React, { useEffect, useState } from 'react'

import './beforload.css'
// window.addEventListener("onload",()=>{
// console.log("yalai");
// })


export default function Beforloded() {
const [hidenLoader,setHidenLoader]=useState("loader")
window.addEventListener("load",()=>{
    // console.log("yalaedei");
    setHidenLoader("loader hidden")

    })
    useEffect(() => {

        setHidenLoader("loader hidden")

    }, [])
  return (
    <div>
        
        <div className={hidenLoader}>
      <img src="./loading.gif"  alt="Loading..." />
    </div>
    {/* <h2 id="title">Custom Loader - SabzLearn</h2>
    <div className="content">
      <h1>slm</h1>
    </div> */}
    </div>
  )
}
