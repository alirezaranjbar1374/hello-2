import * as React from 'react';

import { Avatar, Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import "./teacher.css"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TheacherOneAction, TheachersListAction } from './../../redux/action/TheacherAction';
import TeacherCourseDetil from './../TeacherCourseDetil/TeacherCourseDetil';
import { useState } from 'react';
import Box_latest_courses from '../../components/boxcourse/Box_latest_courses';


const Teacher = (props) => {
  // console.log("props",props);
    let params=useParams();
    // console.log("params",params.id);
    const [coursedata,setCoursedata]=useState([])
// const { id } = useParams()
// console.log(id);

const dispatch=useDispatch()

// console.log("slam",theacher1);

React.useEffect(() => {
  
dispatch(TheacherOneAction(params.id))
dispatch(TheachersListAction())

setCoursedata(theacher1.course)
  },[dispatch,coursedata,params.id])


  const TeacherDetil=useSelector((state)=>state.TeacherDetil)


  const {loading,theacher1}=TeacherDetil

console.log("goi",theacher1.course?.map(item=>item));

const TheachersList=useSelector((state)=>state.ThecherList)
const {loading1,theacher}=TheachersList

let coursesd=theacher.map(item=>item.course)

console.log("courses1",coursedata);
    return ( 
      <Box>         
        <Container >
        <div className="teacher-container">
            <h3>{theacher1.name}</h3>
            
            <Container >
        <div className="teacher-card">
        <Avatar alt="Remy Sharp" sx={{ width: 156, height: 156 }} src={theacher1.pic ? theacher1.pic:"https://www.canr.msu.edu/greenbioproducts/uploads/images/profile-pictures/bagheri_sajad1.jpg?language_id=1" } />
        <h4>
            {theacher1.description
            }
</h4>
<h3>email :{theacher1.email?theacher1.email :"ali@gmail.com"}</h3>


        </div>
     
        </Container>
    
        </div>
        
        <div  style={{display:"flex",justifyContent:"space-around"}} >
         <Box  className='box_last_courses' sx={{display:"flex",flexWrap:"wrap",marginBottom:"45px"}}>
         {theacher1.course?.length==0?<h1>دوره ای یافت نشد</h1>:
          theacher1.course?.map(item=>(
            <Container>
            <Container style={{padding:10}}>
            <Box_latest_courses  {...item} />


            </Container>
          </Container>
              ))  }
         </Box>
        </div>
        </Container>
 
     

     



</Box>

     );
}

export default Teacher;