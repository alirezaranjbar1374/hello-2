
import { useState, useEffect } from 'react';
import { Avatar, Container,Box,Grid,Card} from "@mui/material";
import React from "react";
import  axios  from 'axios';


import './course.css'
import Courses from '../CourseVideos/Courses';
import Drft from './../DRFT/Drft';
import SlickSlider from '../../utils/Slickslider/SlickSlider';
const CourseVideo = () => {
  const [aval,SetAval]=useState([])

   
  useEffect(() => {
    axios.get("http://localhost:3001/api/user/getlistteacher").then(res=>{
    // console.log("resone",res.data);
    SetAval(res.data)
    
  }).catch(err=>{
    console.log("err",err);
  })
  }, [])
  const secend=aval.map(item=>item.course)
  // console.log("secenvideo",secend.flat(Infinity).map(item=>item.video).flat());
  let dada=secend.flat(Infinity).map(item=>item.video).flat(Infinity)
  console.log("22",dada);
  const as=[]
//باید اسم دوره  رو اورد بغد با اسمش فیلتر کرد
  
  for (let index = 0; index < secend.length; index++) {
    const element = secend[index];
  // for (let index = 1; index < element.length; index++) {
  //   const element1 = element[index];
  //   // console.log("index2",element1);
  
  
    
  // } 
  const wo= element.map(item=>as.push(item)) 
  
  
  }
  // console.log("as2",as);

  
      return (
  
        <div className='course_bg' style={{width:"100%"}}>
        <div className='top_text_Latest_courses'>
            {/* <div className='right_Latest_courses'>
                <h2>جدید ترین دوره ها</h2>
                <p>سکوی پرتاب شما به سمت موفقیت</p>
            </div>

            <div className='left_Latest_courses'>
                <button>تمام دوره ها</button>
                <i class="fa-solid fa-arrow-left"></i>
            </div> */}
        </div>
        <Container  style={{textAlign:"center",width:"100%"}}>
          
          {as.map(item=>(
            <Container key={item._id}>
              <div style={{padding:10}}>
              <Courses {...item} />
  
  
              </div>
            </Container>
          ))}
<div className='alal' style={{background:'',borderRadius:"7px",margin:"20px",padding:"20px"}}>
  <h3>دوره های مرتبط با این استاد</h3>
    <SlickSlider/>
  </div>
          <div style={{background:'#ffff',borderRadius:"7px",padding:"30px"}}>
          <Drft/>
          </div>

        </Container>
    </div>
        );
  
}
 
export default CourseVideo;