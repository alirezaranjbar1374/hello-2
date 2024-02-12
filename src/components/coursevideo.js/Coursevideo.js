
import { useState, useEffect } from 'react';
import { Avatar, Container,Box,Grid,Card, Button} from "@mui/material";
import React from "react";
import  axios  from 'axios';


import './course.css'
import Courses from '../CourseVideos/Courses';
import Drft from './../DRFT/Drft';
import SlickSlider from '../../utils/Slickslider/SlickSlider';
import NestedComment from '../NestedComments/NestedComment';
import { useSelector ,useDispatch} from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { isEmpty } from "lodash";
import swal from "sweetalert";


import { EditorState } from 'draft-js';
import AlertCustome from '../../utils/Alert/Alert';
import CommentCourse from '../CommentCourse/CommentCourse';
const CourseVideo = () => {
  const params = useParams();
  console.log("paramss",params.id);
  const [aval,SetAval]=useState([])
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
  const [text, setText] = React.useState("");
  const refAnsweComment=React.useRef(null)
  const [Alertopen, setAlertopen] = React.useState(false);
  const navigate = useNavigate();
  const UserDetil=useSelector(state=>state.USERreducer)

  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);

    let text = editorState.getCurrentContent().getPlainText("\u0001");
    setText(text);
    console.log("JKKJKJ",text);

  };

  let titleDreft="دوره"
   
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
  console.log("as2",as);

  const SendCommentArticel=(event)=>{
    event.preventDefault();
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
    const body={
      
      text,
      user: UserDetil._id
    }
    if(text.length<3){
      alert("false");return 0
    }
   
    axios.post(`http://localhost:3001/api/user/CreateCourseComment/${params.id}`,body).then(res=>{
      console.log("resarticlecomment",res);
      setAlertopen(true)
      setEditorState("")


    }).catch(err=>{
    alert("err")
      console.log("ererarticelpost",err);
    })
  }
    
  }
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
          <Drft  refAnsweComment={refAnsweComment} titleDreft={titleDreft} editorState={editorState} onEditorStateChange={onEditorStateChange}/>
          <Button onClick={SendCommentArticel}  size="large" variant="contained" sx={{mt:3}}>ارسال نظر</Button>

          </div>
          <AlertCustome setAlertopen={setAlertopen} text="کامنت با موفقیت ثبت شد و پس از تایید قابل رویت است" Alertopen={Alertopen} severity="success" />
<Container>
<CommentCourse id={params.id}/>

</Container>
        </Container>

    </div>
        );
  
}
 
export default CourseVideo;