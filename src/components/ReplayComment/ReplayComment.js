import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import ModulComment from '../Modulcomponet/ModulComment';

export default function ReplayComment({id}) {
    console.log("idreplay",id);
    const [listReplay,setListReplay]=useState([])
    const FetchReplaycomment=()=>{
        axios.get(`http://localhost:3001/api/user/getoneAnswerComments`).then(res=>{
            console.log("alialialailai",res.data);
            const datafiltered=res.data.filter(item=>item.comment==id)
            setListReplay(datafiltered)

        }).catch(err=>{
            console.log("erransercomment",err);
        })
    }
    


    const replyRef = useRef(null)
    const  listRef =useRef(null);
const replayfunction =(item_id,event)=> {
    console.log("event",event.target.nextElementSibling,"alll",item_id);

  if ( listRef.current.style.height == "auto") {
    // current.contains(event.target)
    console.log("1",listRef.current.style.height);
    event.currentTarget.nextElementSibling.className="listauto-none"
    listRef.current.style.height = "0px"

  }
  

  else{
    console.log("4",listRef.current.style.height);

    event.currentTarget.nextElementSibling.className="listauto"
    listRef.current.style.height = "auto"


  }
};;





 
useEffect(() => {
    FetchReplaycomment()

}, [])
console.log("listReplay",listReplay);

  return (
    <> 

 {listReplay?.length==0?
 <> 
 <p className='p-comments reply' onClick={(event)=>replayfunction(id,event)} ref={replyRef}>ریپلی ها</p>

<ul className="fa-ul twocolumn hide-list" value={id} ref={listRef}>
</ul>
 </>
 :
 

<>
<p className='p-comments reply' onClick={(event)=>replayfunction(id,event)} ref={replyRef}>دیدن پاسخ</p>

<ul className="fa-ul twocolumn hide-list" value={id} ref={listRef}>
    {listReplay[0].comment==id?
    <ul>
{listReplay.map(item=>{
  return<> <li  className='li-comments'><i className="fas fa-user-circle"></i>

   <h3>{item._id}</h3>
   <p className='p-comments'>{item.body}</p>
   <ModulComment id={item._id} />
   <p className='p-comments reply' onClick={(event)=>replayfunction(id,event)} ref={replyRef}>دیدن پاسخ</p>

       
     
   </li>
   
      <li  className='li-comments'><i className="fas fa-user-circle"></i>
      <h3>Holly Berry</h3>
      <p className='p-comments'>121212</p>
      <p className='p-comments reply' onClick={(event)=>replayfunction(id,event)} ref={replyRef}>دیدن پاسخ</p>

    </li>
    </>

})}
   
    </ul>
  
   
   
   :""
}
  

 </ul>
</>
}
</>
 
    )
}
