import { Autocomplete, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { TheachersListAction } from "../../redux/action/TheacherAction";
import RtlContainer from "../../utils/RtlContainer/RtlContainer";
import { useDispatch,useSelector} from "react-redux"

const AutoCompleted=()=>{
    const [data,setData]=useState({text:""})
const [filterdcourse,setFilterdcourse]=useState([])
    const dispatch=useDispatch()
    const TheachersList=useSelector((state)=>state.ThecherList)
    const {loading,theacher}=TheachersList
    let datacourse=theacher.map(item=>item.course).flat()
    let data1=datacourse.map(item=>item.name)

      React.useEffect(() => {
    
   dispatch(TheachersListAction())
    
      },[dispatch])
      let filteredtomout;
      const CourseSearch=(event)=>{
//    if(data.text.length==0){
//     setFilterdcourse([])
//    }
clearTimeout(filteredtomout)
setFilterdcourse([])
        setData({...data,text:event.target.value})
        filteredtomout= setTimeout(() => {
        if(data.text.length==0){
            setFilterdcourse([])
        }
        setFilterdcourse(data1.filter((course)=>{
            
            return course.toLowerCase().includes(event.target.value.toLowerCase())
        }))
       }, 1000);
     
            }
            console.log("good",filterdcourse);

    return(
        <RtlContainer>
             <Container>
            <input value={data.text} onChange={CourseSearch}/>

             </Container>
   
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data1}
      sx={{ width: 300 }}
      renderInput={(params) => <>
      <TextField {...params} label="دوره ها" />
 
      </>}
    />
    
    <Container>
        {data.text.length==0 || filterdcourse.length==0 ?"درحال جستجو":
    
    filterdcourse.map(item=>(
        <>
        <ul>
            <li>{item}</li>
        </ul>
        </>
    ))
    }
    </Container>
      </RtlContainer>
    )
}
export default AutoCompleted;