import  axios  from 'axios';
import { useState, useEffect } from 'react';
import TeacherCourseDetil from '../TeacherCourseDetil/TeacherCourseDetil';
import { useDispatch, useSelector } from 'react-redux';
import { TheachersListAction } from './../../redux/action/TheacherAction';
import "./allcourse.css"

const AllCourses = () => {
    const [allcourse,setAllcourse]=useState([])
    const dispatch=useDispatch();
    useEffect(() => {
  
        dispatch(TheachersListAction())
       

           },[dispatch])
    const TheachersList=useSelector((state)=>state.ThecherList)
    const {loading,theacher}=TheachersList;
    const dataCourse=theacher.map(item=>item.course)
    let coursese=dataCourse.flat()
    console.log("data",coursese);


    return (  
        <div  style={{width:"100%",display:"flex",justifyContent:"space-around"}} >
   
           <TeacherCourseDetil coursese={coursese} />

   
        </div>
    );
}
 
export default AllCourses ;