import React, { useEffect, useState } from 'react'

import { useRef } from "react";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ForumIcon from '@mui/icons-material/Forum';
import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentUntil from '../../utils/Commentuntil/CommentUntl';
import ShowTime from '../../utils/ShowTime/ShowTime';
import ModulComment from '../Modulcomponet/ModulComment';

function CommentCorseShow({ comment,blog }) {

// if(fW4._textEditBoxP_CHQRETDTT.value.slice(0,4) - fW4._textEditBoxP_CHQRETDTF.value.slice(0,4)>1){
//     alert("بازه انتخابی باید یکسال بیشتر نباشد")
// }else if(fW4._textEditBoxP_CHQRETDTT.value.slice(0,4) - fW4._textEditBoxP_CHQRETDTF.value.slice(0,4)==1 && fW4._textEditBoxP_CHQRETDTF.value.slice(5,7)> fW4._textEditBoxP_CHQRETDTT.value.slice(5,7)){
//     alert("بازه انتخابی باید یکسال بیشتر نباشد")
  
// }else{
//     console.log("dorost");
    
// }




    
// if(fW4._textEditBoxP_CHQRETDTF.value.replace(/\//g, "")>document.querySelector(".cls1one").innerText && fW4._textEditBoxP_CHQRETDTT.value.replace(/\//g, "")>document.querySelector(".cls1one").innerText
// && fW4._textEditBoxP_CHQRETDTF.value.replace(/\//g, "")<document.querySelector(".cls1two").innerText && fW4._textEditBoxP_CHQRETDTT.value.replace(/\//g, "")<document.querySelector(".cls1two").innerText){
  
// console.log("slm");
// }else{
//   alert("بازه تاریخی درست را انتخاب نمایید") ;return 0	

// }
    console.log("dddddddddddddd-d-ddd");

    const showContainersREf=useRef(null)
    const [like,setLike]=useState(0)
    const [dislike,setDisLike]=useState(0)
    const [trudisLIKE,setDistrueLike]=useState(false)
    const [likeshode,setLikeShode]=useState(<ThumbUpIcon color='success'/>)
    const [likeshode1,setLikeShode1]=useState("ali")
    const [dislikeshode,setDislikeShode]=useState(<ThumbDownIcon color='error'/>)
    const [dislikeshode1,setDislikeShode1]=useState("ali")

    const [truLIKE,settrueLike]=useState(false)
    const [truLIKE1,settrueLike1]=useState(false)

    const navigate = useNavigate();

    const UserDetil=useSelector(state=>state.USERreducer)

useEffect(() => {
 
}, [truLIKE,dislike,like])
const finddisLiked=comment?.disliked?.find(item=>item==UserDetil._id)

    const HandeDislLike=(likedata,id)=>{

    var a=likedata+1
  

    settrueLike1(prev=>!prev)
     console.log("findLiked11111",finddisLiked);
     if(finddisLiked && comment.dislike==1){
     
         // console.log("-----------------------",comment.like+1);
         if(!truLIKE1){
             const body={
                dislike:comment.dislike+1,
                 "parent":id,
     
                 user:UserDetil._id
     
             }
             setDisLike(comment.dislike+1)
             setDislikeShode(<ThumbDownIcon color='error'/>)
             setDislikeShode1("1")
             CommentUntil("CreateCourseComment",body,blog,UserDetil,navigate)
             console.log("comment.like20",comment.like+1);
     
     
         }
         else{
             const body={
                dislike:comment.dislike,
                 "parent":id,
     
                 user:UserDetil._id
     
             }
             setDisLike(comment.dislike)
             setDislikeShode(<ThumbDownOffAltIcon color='error'/>)
             setDislikeShode1("ali")
             console.log("comment.like1",comment.dislike);
     
             CommentUntil("CreateCourseComment",body,blog,UserDetil,navigate)
     
             console.log("comment.like30",comment.dislike);
     
         }
     
     }
     else if(finddisLiked){
         if(!truLIKE1){
             const body={
                dislike:comment.dislike-1,
                 "parent":id,
     
                 user:UserDetil._id
     
             }
             setDisLike(comment.dislike-1)
             setDislikeShode(<ThumbDownOffAltIcon color='error'/>)
             setDislikeShode1("ali")
             CommentUntil("CreateCourseComment",body,blog,UserDetil,navigate)
             console.log("comment.like222222",comment.dislike-1);
     
     
         }else{
             const body={
                dislike:comment.dislike,
                 "parent":id,
     
                 user:UserDetil._id
     
             }
             setDisLike(comment.dislike)
             setDislikeShode(<ThumbDownIcon color='error'/>)
             setDislikeShode1("1")
             CommentUntil("CreateCourseComment",body,blog,UserDetil,navigate)
     
             console.log("comment.like33333333",comment.dislike);
     
         }
        }else{
            if(!truLIKE1){
                setDisLike(a)
                const body={
                    dislike:comment.dislike?comment.dislike+1:dislike+1,
                    "parent":id,
        
                    user:UserDetil._id
                   }
                // console.log("id",id,"body",body);
        
                setDislikeShode(<ThumbDownIcon color='error'/>)
             setDislikeShode1("1")
                CommentUntil("CreateCourseComment",body,blog,UserDetil,navigate)
                console.log("like40",dislike+1)
        
        
            }else{
                setDisLike(likedata)
                
        
                const body={
                    dislike: comment.dislike && comment.dislike==0?comment.dislike:dislike-1,
                    "parent":id,
                    user:UserDetil._id
                   }
        
                console.log("id",id,"body",body);
                setDislikeShode(<ThumbDownOffAltIcon color='error'/>)
                setDislikeShode1("ali")
                CommentUntil("CreateCourseComment",body,blog,UserDetil,navigate)
        
                console.log("like50",dislike-1)
        
            }
        }
         



      



        } 
        const findLiked=comment?.liked?.find(item=>item==UserDetil._id)

   const HandelLike=(likedata,id)=>{
   var a=likedata+1
  

   settrueLike(prev=>!prev)
console.log("findLiked",findLiked);
if(findLiked && comment.like==1){

    // console.log("-----------------------",comment.like+1);
    if(!truLIKE){
        const body={
            like:comment.like+1,
            "parent":id,

            user:UserDetil._id

        }
        setLike(comment.like+1)
        setLikeShode(<ThumbUpIcon color='success'/>)
        setLikeShode1("1")

        CommentUntil("CreateCourseComment",body,blog,UserDetil,navigate)
        console.log("comment.like20",comment.like+1);


    }
    else{
        const body={
            like:comment.like,
            "parent":id,

            user:UserDetil._id

        }
        setLike(comment.like)
        setLikeShode(<ThumbUpOffAltIcon color='success'/>)
        setLikeShode1("ali")


        console.log("comment.like1",comment.like);

        CommentUntil("CreateCourseComment",body,blog,UserDetil,navigate)

        console.log("comment.like30",comment.like);

    }

}
else if(findLiked){
    if(!truLIKE){
        const body={
            like:comment.like-1,
            "parent":id,

            user:UserDetil._id

        }
        setLike(comment.like-1)
        setLikeShode(<ThumbUpOffAltIcon color='success'/>)
        setLikeShode1("ali")


        CommentUntil("CreateCourseComment",body,blog,UserDetil,navigate)
        console.log("comment.like222222",comment.like-1);


    }else{
        const body={
            like:comment.like,
            "parent":id,

            user:UserDetil._id

        }
        setLike(comment.like)
        setLikeShode(<ThumbUpIcon color='success'/>)
        setLikeShode1("1")


        CommentUntil("CreateCourseComment",body,blog,UserDetil,navigate)

        console.log("comment.like33333333",comment.like);

    }
}

else{
    if(!truLIKE){
        setLike(a)
        const body={
            like:comment.like?comment.like+1:like+1,
            "parent":id,

            user:UserDetil._id
           }
        // console.log("id",id,"body",body);

      
        CommentUntil("CreateCourseComment",body,blog,UserDetil,navigate)
        setLikeShode(<ThumbUpIcon color='success'/>)
        setLikeShode1("1")



        console.log("like40",like+1)


    }else{
        setLike(likedata)
        

        const body={
            like: comment.like && comment.like==0?comment.like:like-1,
            "parent":id,
            user:UserDetil._id
           }

        console.log("id",id,"body",body);
        CommentUntil("CreateCourseComment",body,blog,UserDetil,navigate)
        setLikeShode(<ThumbUpOffAltIcon color='success'/>)
        setLikeShode1("ali")


        console.log("like50",like-1)

    }
}
  

   } 

    const HandelReplay=(e,id)=>{
 
        const showContainers=showContainersREf.current
      
        console.log("id",id,blog);
      
      //  console.log("listReplay",listReplay);
  
      
      setTimeout(() => {
        // console.log("listReplay43",arr);
        if(showContainers){
           
            let parentContainer = e.target.closest(".comment__container");
            console.log("parentContainer",parentContainer);
            let _id = parentContainer.id;
            console.log("id",_id);
            if (_id) {
            
              let childrenContainer = parentContainer.querySelectorAll(
                `[dataset=${_id}]`
              )
       
            
            childrenContainer.forEach((child,e) => {
                console.log("event",e);
                console.log("lklklkl",childrenContainer[1]);
                console.log("child",child);
                if(e==0){
                    child.classList.toggle("opened")

                }else{
console.log("kkjk");
                }
            });


              
            }
         
            }
     
    
      } ,1000);
        
      
      }


    return (
<div key={comment._id} className="container">
<div className="comment__container opened" id="first-comment">
<div className="comment__card">
    <span>
         <Avatar sx={{bgcolor:comment?.UserName =="admin"?"green":"",textAlign:"center", width:comment?.UserName =="admin"? 56:40, height:comment?.UserName =="admin"?56 : 40}} >{comment?.UserName =="admin" ? <span>مدیر سایت</span>: comment?.UserName?.split(' ')[0][0] }</Avatar>
    </span>
          <h5 className="comment__title">{comment.text.substring(0,550)}</h5>
      
          <div className="comment__card-footer">
            <div onClick={()=>HandeDislLike(comment.dislike?comment.dislike:0,comment.id)}  style={{display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>{finddisLiked == undefined && dislikeshode1=="ali"  ?<ThumbDownOffAltIcon color='error'/>:dislikeshode }     {dislike==0? comment.dislike:dislike}</div>
        <div onClick={()=>HandelLike(comment.like?comment.like:0,comment.id)}  style={{display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>{like==0? comment.like:like}{findLiked == undefined && likeshode1=="ali"  ? <ThumbUpOffAltIcon color='success'/>:likeshode }  </div>

            <div>
            <ModulComment url="CreateCourseComment" blog={comment.course} id={comment.id} />

            </div>
            <div ref={showContainersREf}  onClick={(e)=>HandelReplay(e,comment.id)} className="show-replies" style={{display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}> <ForumIcon/> {comment?.children?.length }</div>
            <ShowTime timestamp={comment.date}/>

          </div>
        </div>
 
            {comment?.children?.length > 0 && (
            <div
            className="comment__container"
            dataset="first-comment"
            id="first-reply"
          >
            {comment?.children?.map(child => (
              <CommentCorseShow key={child._id} comment={child} />
            ))}
          </div>
        )}

 
          
          <div
            className="comment__container"
            dataset="first-reply"
            id="first-first-reply"
          >
            <div className="comment__card">
              <h3 className="comment__title">The first reply to the first reply</h3>
              <p>
              {comment?._id}
              </p>
              <div className="comment__card-footer">
                <div>Likes 123</div>
                <div>Dislikes 23</div>
                <div>
            <ModulComment url="CreateCourseComment" blog={comment.course} id={comment.id} />

            </div>
                <div ref={showContainersREf}  onClick={(e)=>HandelReplay(e,comment._id)} className="show-replies">Reply 1</div>
              </div>
            </div>
        
          </div>
        
      </div>

        </div>
    );
  }
  
  function CommentsSohw({ comments }) {
    return (
      <div>
        {comments?.map(comment => (
          <CommentCorseShow key={comment._id} comment={comment} />
        ))}
      </div>
    );
  }
  export default CommentsSohw;




