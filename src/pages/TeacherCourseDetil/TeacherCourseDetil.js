
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import "./teachercoursedetil.css"
import { Container } from '@mui/material';
import Box_latest_courses from './../../components/boxcourse/Box_latest_courses';
const TeacherCourseDetil = ({coursese}) => {
    return ( 


      <div className='latest_courses' style={{width:"100%",textAlign:"center"}}>
      <div className='top_text_Latest_courses'>
          <div className='right_Latest_courses'>
              <h2>تمامی دورها</h2>
         
          </div>
    
      </div>
      <div className='box_last_courses' style={{textAlign:"center"}}>
        
        {coursese.map(item=>(
          <Container>
            <Container style={{padding:10}}>
            <Box_latest_courses  {...item} />


            </Container>
          </Container>
        ))  }


      </div>

  </div>



        

     );
}
 
export default TeacherCourseDetil;