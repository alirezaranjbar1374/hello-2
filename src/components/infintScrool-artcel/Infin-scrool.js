import { Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { Button } from '@mui/material';
import { color } from '@mui/system';
import axios from 'axios';
import moment from 'jalali-moment';
import React, { useEffect, useRef, useState } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'
import ShowTime from '../../utils/ShowTime/ShowTime';
import Comments from '../Comment/Comment';
import ModulComment from '../Modulcomponet/ModulComment';
import ReplayComment from '../ReplayComment/ReplayComment';
import './infint.css'

export default function Infinscrool1({data,id}) 



{
console.log("iddddddddddd",id,data);

    const listcomments=useRef(null)
    const refloder=useRef(null)
    const [listauto,setListauto]=useState("listauto")
  



const renderText=(text)=>{
  return {_html:text.replace(/#\S+/g,`<p style={{color:"red"}}>$&</p>`)}
}
const HASHTAG_FORMATTER = (string) => {
  return string
    .split(/((?:^|\s)(?:#[a-z\d-]+))/gi)
    .filter(Boolean)
    .map((v, i) => {
      if (v.includes("#")) {
        return (
          <p key={i} style={{ color: "green" }}>
            {v}
          </p>
        );
      } else {
        return <p key={i}>{v}</p>;
      }
    });
};





console.log("hellohello",renderText("slm alireza #hello"));   
 const LIMIT=2
    let arr=[]
    arr= data.slice(0,LIMIT)
    const [postData,setPostdata]=useState(data.slice(0,LIMIT))
    const [visibel,setVisebel]=useState(0)
    const [more,seTmorse]=useState(true)
    const [text,settext]=useState("slm")
const fetchMoreData=()=>{
    const NewLimit=visibel+LIMIT
    const dataToAdd=data.slice(visibel,NewLimit)
    let ArrNew=data.slice(0,LIMIT)
    let arrconcet=([...ArrNew].concat(dataToAdd))
  
    if(data.length>postData?.length){
        setTimeout(() => {
            setPostdata([...postData].concat(dataToAdd))
        }, 2000);
        setVisebel(NewLimit)
    }else{
        seTmorse(false)
    }
}

useEffect( () => {

    listcomments.current.scrollTo(0,0)

    window.scroll(0,0)
    if(visibel > postData.length  ){
        settext("پایان")
            }else{
                settext("درحال بارگزاری کامنت ها...")
            }
}, [])

 console.log("1111111111111",data.slice(0,LIMIT));
// console.log("22222222222222222",postData?.sort((a, b) => b.date.localeCompare(a.date)));
console.log("=-=======",postData.length, "data.length", data.length,more);
console.log("LIMIT",LIMIT,"visibel",visibel);
let str=postData.length
  return (

   < div 
   ref={listcomments}
  id="scrollableDiv"
  className='containerScrool'
  style={{
    height: 450,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse',
  }}
>
{data.length==0?"":
<>



<InfiniteScroll
  dataLength={postData.length} //This is important field to render the next data
  next={fetchMoreData}
  hasMore={more}
loader={<h4>{text}</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>پایان</b>
    </p>}
  
  


>

{/*     
{visibel <0?

postData?.map(item=>{

    return         <div className="wrapper1">
    
    <p>{HASHTAG_FORMATTER(item.text)}</p>

    <li    className='li-comments'>
          <li style={{marginBottom:"25px"}} className='li-comments'><i className="fas fa-user-circle"></i>
              <h3>{item._id}</h3>
              <h1>{moment(item.date).locale("fa").format("YYYY/MM/DD HH:mm:ss") }</h1>
              <ShowTime timestamp={item.date}/>
              <p className='p-comments'>{item.text} </p>
            </li>
    
          <p style={{color:"red"}} className='p-comments'><i className="fas fa-heart"> 2</i><i className="fas fa-comment-alt"> 2</i><i className="fas fa-eye"> 2</i></p>
         

         <ReplayComment id={item._id} />
     

        </li>
     
            </div>
        })




:
    
    postData?.sort((a, b) => b.date.localeCompare(a.date)).map(item=>{

return         <div className="wrapper1">
  <p>{HASHTAG_FORMATTER(item.text)}</p>


<li    className='li-comments'>
      <li style={{marginBottom:"25px"}} className='li-comments'><i className="fas fa-user-circle"></i>
          <h3>{item._id}</h3>
          <h1>{moment(item.date).locale("fa").format("YYYY/MM/DD HH:mm:ss") }</h1>
          <ShowTime timestamp={item.date}/>

          <p className='p-comments'>{item.text}</p>
          
          <ModulComment id={item._id} />
        </li>

      <p className='p-comments'><i className="fas fa-heart"> 2</i><i className="fas fa-comment-alt"> 2</i><i className="fas fa-eye"> 2</i></p>
  

<ReplayComment id={item._id} />



    </li>
 
        </div>
    }


        
            )
    } */}




<Comments comments={postData} blog={id} />



</InfiniteScroll>
</>
}
  
</div>
  )
}
