import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Box_latest_courses.css';
import CourseVideo from './../coursevideo.js/Coursevideo';
import './Box_latest_courses.css'
import CircleSpinner from '../../utils/CircleSpinner/CircleSpinner';

export default function Box_latest_courses(props) {
    const [imgshow,setImgshow]=useState(false)
  return (
    <div className='Box_latest_courses '>
           <Link   to={`/course/${props._id}`}>

        <img onLoad={()=>setImgshow(true)} src={props.pic} width="200px" height="200px" alt="" />
        {/* <div  style={{display:"none1"}}>
            {props.video.map(item=>(
                <>


<CourseVideo {...item}/>
                </>
            ))}

        </div> */}
{imgshow==false?<CircleSpinner width="200px" height="200px"/>:null }
        </Link>
        <i className={props.icon_play} id="icon_play"></i>

        <h5>{props.name}</h5>
        <div className='text_star'>
            <div className='right_text_star'>
                <i className={props.icon1}></i>
                <p>علیرضازنجبر</p>
            </div>
            <div className='left_text_star'>
                <i className={props.star}></i>
                <i className={props.star}></i>
                <i className={props.star}></i>
                <i className={props.star}></i>
                <i className={props.star}></i>
            </div>
        </div>
        <div className='bottom '>
            <div className='right_bottom'>
                <i className={props.icon_1}>{props.timeCourse}</i>
                <p>ساعت</p>
            </div>
            <div className='left_bottom '>
                <p className='last_price_box_last_courses'>{props.price}</p>
                <p className='price_box_last_courses'>200000</p>

            </div>
        </div>
        
    </div>
  )
}


