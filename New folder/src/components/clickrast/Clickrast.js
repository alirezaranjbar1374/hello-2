import { useEffect } from 'react';
import { useState } from 'react';
import Sucpay from '../succes-payment/Sucpay';
import './clcikrast.css'

const ClickRast=({children,Contecmenue})=>{
    const[menushow,setMenoshow]=useState("none")
    const [menutop,setMenutop]=useState(0)
    const [menuleft,setMenuleft]=useState(0)
    useEffect(() => {
        
    }, [menuleft])
    const Clickhandeler=(event)=>{
        event.preventDefault()
        // console.log("سمئ",Contecmenue());
       
        // console.log("fff",event.pageY);
        if(menushow=="none"){

            setMenutop(event.pageY)
            setMenuleft(event.pageX)
    
            setMenoshow("context-menu")
          }else if(menushow!="context-menu"){
            setMenoshow("none")
            setMenutop(event.pageY)
            setMenuleft(event.pageX)

          }
          else{
            setMenoshow("context-menu")

            setMenutop(event.pageY)
            setMenuleft(event.pageX)
          }

    }
    const Clcickhide=()=>{
        setMenoshow("none")
    }


    return(
        <div onClick={Clcickhide} onContextMenu={Clickhandeler} className="ul_container">
            <Sucpay/>
   <div  className={menushow} style={{top:menutop,left:menuleft}}> 
      <ul className="menu"> 
          <li className="share"><a href="#"><i className="fa fa-share" aria-hidden="true"></i> اشتراک</a></li> 
          <li className="rename"><a href="#"><i className="fa fa-pencil" aria-hidden="true"></i> ویرایش</a></li> 
          <li className="link"><a href="#"><i className="fa fa-link" aria-hidden="true"></i> گپی کردن ادرس</a></li> 
          <li className="copy"><a href="#"><i className="fa fa-copy" aria-hidden="true"></i> کپی</a></li> 
          <li className="paste"><a href="#"><i className="fa fa-paste" aria-hidden="true"></i> حرکت دادن</a></li> 
          <li className="download"><a href="#"><i className="fa fa-download" aria-hidden="true"></i> دانلود</a></li> 
          <li className="trash"><a href="#"><i className="fa fa-trash" aria-hidden="true"></i> پاک کردن</a></li> 
      </ul> 
  </div> 

        </div>
     )
}

export default ClickRast;
