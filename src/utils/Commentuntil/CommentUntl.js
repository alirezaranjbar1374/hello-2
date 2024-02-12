import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { isEmpty } from "lodash";
import swal from "sweetalert";
import axios from 'axios';



    
  const CommentUntil = (url,body,blog,UserDetil,navigate)=>  {


    if(!isEmpty(UserDetil)==false){
      swal({
          title:"ابتدا باید لاگین کنید",
          icon:"error",
          buttons:"متوجه شدم"
      })
    setTimeout(() => {
      navigate("/login")
    }, 3000);
  }else{
  
  
  // url=http://localhost:3001/api/user/CreateAnswerComment
  axios.post(`http://localhost:3001/api/user/${url}/${blog}`,body).then(res=>{

      console.log("res",res);
  }).catch(err=>{
      console.log("err",err);
  })
  

  }
    

  };

  export default CommentUntil