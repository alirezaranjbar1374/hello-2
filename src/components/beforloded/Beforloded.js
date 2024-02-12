import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import animationData from './AnimLoadLoti.json'

import './beforload.css'
// window.addEventListener("onload",()=>{
// console.log("yalai");
// })


export default function Beforloded() {
  const defaultOptions = {
    loop: true,

    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
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
      {/* <img src="./loading.gif"  alt="Loading..." /> */}
      <Lottie 
            isPaused={false}
            isClickToPauseDisabled
	    options={defaultOptions}
        height={1000}
        width={800}
      />
    </div>
    {/* <h2 id="title">Custom Loader - SabzLearn</h2>
    <div className="content">
      <h1>slm</h1>
    </div> */}
    </div>
  )
}
