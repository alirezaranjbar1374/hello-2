


import { useState, useEffect } from 'react';
import { Avatar, Container,Box,Grid,Card} from "@mui/material";
import React from "react";
import  axios  from 'axios';
import Box_latest_courses from './../../components/boxcourse/Box_latest_courses';
import './home.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Articel from '../../components/articles/Articel';
import SlickSlider from '../../utils/Slickslider/SlickSlider';
import Lotifii from '../../components/ShowLotfi/Lotifii';
const Home = () => {


  const user=useSelector(state=>console.log(state))
  console.log('====================================')
  console.log("user2",user)
  console.log('====================================')
 

  const [aval,SetAval]=useState([])
const [currentPage,setCurrentPage]=useState(1)
const [pagenatedeTodos,setPagenatedeTodos]=useState([])
   let pageSize=6;
   let pageNumber=[]
   let endIndex=pageSize * currentPage;
   let startIndex=endIndex - pageSize;
   const as=[]

useEffect(() => {
  axios.get("http://localhost:3001/api/user/getlistteacher").then(res=>{
  // console.log("res",res.data);
  SetAval(res.data)
  


  let allShowTodo=as.slice(startIndex,endIndex)
// console.log("allshow",allShowTodo);
setPagenatedeTodos(allShowTodo)
// console.log("pagenatedeTodos",pagenatedeTodos);

}).catch(err=>{
  console.log("err",err);
})
}, [currentPage])
const secend=aval.map(item=>item.course)

for (let index = 0; index < secend.length; index++) {
  const element = secend[index];
  
  

const wo= element.map(item=>as.push(item)) 

// console.log("as",as);
const pageCount=Math.ceil(as.length/pageSize)
pageNumber=Array.from(Array(pageCount).keys())



}
const as1=as.slice(0,6)
// console.log("as1",as1);






const changepageint=(newpage)=>{
  setCurrentPage(newpage)
  let allShowTodo=as.slice(startIndex,endIndex)
setPagenatedeTodos(allShowTodo)
}
// console.log("baraval",pagenatedeTodos);

    return (
      <div  style={{width:"100%"}}>  

        {/* <SlickSlider/> */}

      <div className='latest_courses' style={{width:"100%",textAlign:"center"}}>
      <Lotifii/>

      <div className='top_text_Latest_courses'>
        
          <div className='right_Latest_courses'>

              <h2 className="card_articel">جدید ترین دوره ها</h2>
              <p>سکوی پرتاب شما به سمت موفقیت</p>
          </div>
          <div className='left_Latest_courses'>
              <button className="card_articel">
                <Link to="/allcourses">
                تمام دوره ها

                </Link>
                </button>
              <i class="fa-solid fa-arrow-left"></i>
          </div>
      </div>
      <div className='box_last_courses' style={{textAlign:"center"}} >
        
        {pagenatedeTodos.length==0?as1.map(item=>(
          <Container>
            <Container style={{padding:10}}>
            <Box_latest_courses   {...item} />


            </Container>
          </Container>
        ))  :  pagenatedeTodos.map(item=>(
          <Container>
            <Container style={{padding:10}}>
            <Box_latest_courses  {...item} />


            </Container>
          </Container>
        ))}


      </div>

  </div>
  <div className="container">

<ul className="pagination">
  {/* <li class="icon">
    <span >صفحه قبل</span>
  </li> */}
  {pageNumber.map(item=>(
    <>
      <li className="card_articel" onClick={()=>changepageint(item+1)}><span    className={item+1==currentPage ? "page-active":""}> {item+1}</span></li>

    </>

  ))}


{/*  
  <li class="icon">
    <span >صفحه بعد</span>
  </li> */}
</ul>
</div>
<Container>
<Articel/>

</Container>

  </div>
 
      );
}
 
export default Home;
