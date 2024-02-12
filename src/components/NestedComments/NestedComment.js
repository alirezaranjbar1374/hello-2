import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Comments from '../Comment/Comment'
import './nestedcomment.css'

export default function NestedComment() {
    const [Idcomment,setIdcomment]=useState("6433ad6e39eacfc05cd317e3")
    const [listcomment,setListcomment]=useState([])

    const Fetchdatacomment=async()=>{
        axios.get(`http://localhost:3001/api/user/getCommentsForPost/${Idcomment}`).then(res=>{

          console.log("res.data",res.data);
           function mapReplies (comment) {
            return {
              id: comment._id,
              blog:comment.blog,
              text: comment.text,
              like:comment.like,
              dislike:comment.dislike,
   
              children: comment.children.map(replyId => {
                const reply = res.data.find(c => c._id === replyId);
                return reply ? mapReplies(reply) : null;
              }).filter(Boolean)
            }
          }
        
          const myMappedArray = res.data.filter(c => !c.parent).map(mapReplies);
        
          console.log("myMappedArray2", myMappedArray);
          setListcomment(myMappedArray)

        }).catch(err=>{
          console.log(err);
        })
      }


    useEffect(() => {
       
      Fetchdatacomment()
  
    }, [Idcomment])
    
      return (
        <>
            <Comments comments={listcomment}/>
             </>
         
      )
}
