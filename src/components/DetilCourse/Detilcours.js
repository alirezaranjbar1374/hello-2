import { Box } from '@mui/material'
import './Detil.css'
import React from 'react'

export default function Detilcours({description}) {
  return (
    <Box className='container-detilcourse'>
      
            {/* <img width="500px" src="http://localhost:3001/public/25de32da-7a28-417e-bc96-e7b7ae3875a1-redux-cover-imgage-1024x768.jpg"/> */}
        
        <p>
          {description}
        </p>
    </Box>
  )
}



{/* <a href="http://bicg-cmcs1.bs.bankmellat.ir/ibmcognos/ps/sina/docs/Sina_CC_Base.pdf" target="_blank"  >

<p>
راهنما
</p>
</a>

<div id='TEST' dir:ltr>
راهنما را در اين قسمت وارد کنيد
</div> */}