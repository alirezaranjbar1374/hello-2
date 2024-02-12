import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slickslider.css'
import Slider from "react-slick";
import  axios  from 'axios';

import { useEffect, useState } from "react";
import { flatMap } from "lodash";
import { Box, Container } from "@mui/material";
import Box_latest_courses from "../../components/boxcourse/Box_latest_courses";
const SlickSlider=()=>{
    const [aval,SetAval]=useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/api/user/getlistteacher").then(res=>{
        console.log("res",res.data);
        SetAval(res.data)

      }).catch(err=>{
        console.log("err",err);
      })
      }, [])


      console.log("ak",aval.map(item=>item.course).flat());
      console.log("llllllll",aval.flatMap(item=>item.course).flatMap(item=>item.pic));
      var ab=aval.flatMap(item=>item.course).flatMap(item=>item)
      console.log(ab);
    const settings = {
        dots:false,
        infinite: true,
        speed:500,
        speed:2000,
        slidesToShow: 2,
        centerMode:true,
        lazyload:true,
        autoplay:true,
        // fade:true,
        centerPadding:"10px"
        ,
        
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
     <>  
        <Slider  {...settings}>
         
                {ab.map(item=>{
                    return (
                      <Box  style={{padding:20,display:"flex",flexWrap:"nowrap",marginTop:"20px",backgroundColor:"red"}}>
                      <Box_latest_courses  {...item} />
          
          
                      </Box>
       
                    )
                })}
        
          
</Slider>
</>
    )

}

export default SlickSlider;