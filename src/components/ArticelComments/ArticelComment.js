import { Box, Card, Container, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText'
import InfiniteScroll from 'react-infinite-scroll-component'
import Infinscrool1 from '../infintScrool-artcel/Infin-scrool'
import './articelcomments.css'
export default function ArticelComment({id,SendCommentArticel}) {
    const replyRef = useRef(null)
const  listRef =useRef(null);
const [listauto,setListauto]=useState("listauto")
const [listComment,setListComment]=useState([])
const [listComment2,setListComment2]=useState([])

const [one,setOne]=useState(3)
const [two,setTwo]=useState(5)
const [more,seTmorse]=useState(true)

// console.log("a",replyRef.current.style.backgroundColor = 'black');

const replayfunction =(item_id,event)=> {
    // console.log("event",event.target.nextElementSibling,"alll",item_id);

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
};
 const FetchCommentarticel= async()=>{
  await  axios.get(`http://localhost:3001/api/user/getoneComments`).then(res=>{
        const datafetch=res.data.slice(0,3)
        console.log("resdataalii",res.data);
        const filterdData=res.data.filter(item=>item.blog==id)
      
        // setListComment(filterdData.sort((a, b) => b.date.localeCompare(a.date)))



        function mapReplies (comment) {
          return {
            id: comment._id,
            text: comment.text,
            blog:comment.blog,
            like:comment.like,
            dislike:comment.dislike,
            liked:comment.liked,
            disliked:comment.disliked,
            UserName:comment.UserName,
            date:comment.date,

 
            children: comment.children.map(replyId => {
              const reply = filterdData.find(c => c._id === replyId);
              return reply ? mapReplies(reply) : null;
            }).filter(Boolean)
          }
        }
      
        const myMappedArray = filterdData.filter(c => !c.parent).map(mapReplies);
      
        console.log("myMappedArray2", myMappedArray);
        setListComment(myMappedArray)


    }).catch(err=>{
        console.log("err",err);
    })
 }

 let arr=[]
useEffect(() => {

    FetchCommentarticel()
}, [SendCommentArticel])


  return (
   
  <Box  >
  <Container >
    {listComment.length>0&&  <h2>نظرات</h2>}


<Infinscrool1  id={id} data={listComment}/>

 
 
    

        </Container>






  </Box>

    


  )
}




