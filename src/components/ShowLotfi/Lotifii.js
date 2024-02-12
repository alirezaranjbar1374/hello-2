import React from 'react'
import animationData from '../../components/lotties/99063-learn-illustration-cantileverlabs.json'
import Lottie from 'react-lottie';

export default function Lotifii() {

    const defaultOptions = {
        loop: true,

        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div  style={{margin:10,border:"1 px solid black"}}>
            <Lottie 
            isPaused={false}
            isClickToPauseDisabled
	    options={defaultOptions}
        height={800}
        width={800}
      />
    </div>
  )
}
