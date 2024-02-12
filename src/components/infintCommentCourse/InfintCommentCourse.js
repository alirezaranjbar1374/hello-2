import React, { useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import CommentsSohw from '../CommentCourseShow/CommentCourseShow'
import './inifinitCommentCourse.css'

export default function InfintCommentCourse({data,id}) {
    const listcomments=useRef(null)


    const LIMIT=2

    const [postData,setPostdata]=useState(data?.slice(0,LIMIT))
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


  return (
    < div 
    ref={listcomments}
   id="scrollableDiv"
   className='containerScrool'
   style={{
    textAlign:"center",
     height: 450,
     overflow: 'auto',
     display: 'flex',
     flexDirection: 'column-reverse',
   }}
 >
{data.length==0?"":
<InfiniteScroll
  dataLength={postData.length} //This is important field to render the next data
  next={fetchMoreData}
  hasMore={more}
loader={<h4>{text}</h4>}
  endMessage={
    <p style={{ textAlign: 'right' }}>
      <b>پایان</b>
    </p>}
  
  


>

<CommentsSohw comments={postData} blog={id} />



</InfiniteScroll>






}
 </div>
  )
}
