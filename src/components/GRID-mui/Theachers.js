import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, CircularProgress } from '@mui/material';
import axios from 'axios';
import {connect, useDispatch,useSelector} from "react-redux"
import { TheachersListAction } from './../../redux/action/TheacherAction';
import { Link } from 'react-router-dom';
import LoadingSpin from './../loading-spiner/Loading_spin';
import TeacherCourseDetil from './../../pages/TeacherCourseDetil/TeacherCourseDetil';
import BreadcrumbBase from '../../utils/BreadcrumbBase/BreadcrumbBase';

const Theachers = (props) => {
  // console.log("props",props);
  
  const dispatch=useDispatch()
  const TheachersList=useSelector((state)=>state.ThecherList)
  const {loading,theacher}=TheachersList
  console.log("good12121",theacher);
    React.useEffect(() => {
  
 dispatch(TheachersListAction())
  
    },[dispatch])
    let coursesd=theacher.map(item=>item.course)
    // console.log("coursed",coursesd[1]);
    return (
        <div style={{textAlign:"center",alignItems:"center",justifyContent:"center",height:"auto"}}>  

      <Container>
      <BreadcrumbBase one="اندیش لرن" two="مدرسین" three="معرفی مدرسین"/>

      <Box sx={{ flexGrow: 1 }}>
 
  
       {loading ? <div><LoadingSpin/></div> :

     
             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

     
{theacher.map(items=>( <> 

<Grid height="50vh" sx={{marginTop:"60px"}} key={items.id} item xs={2} sm={4} md={4} > <Container> 
  <Card  sx={{borderRadius:2}}  >
     <CardMedia component="img" height="190" image={items.pic ?items.pic:"https://camo.githubusercontent.com/44ef4570e0663cb66576ea1a816223ff22d8493f29ba16ed054fad13d71f1222/68747470733a2f2f696d616765732e6374666173736574732e6e65742f7834776536356271693435712f3739636c5a585a6d745077577a5475783259496c676e2f61373863306635346537653633363932373565616163376530343933333833352f315f485369734c7569664d4f364b624c66504f4b744c6f772e6a706567"} alt="green iguana" />
      <Container> 
        <CardContent> 
          <Typography variant="h6" color="text.secondary"> {items.description} </Typography>
           </CardContent> 
           </Container> 
           <CardActions  style={{textAlign:"center",alignItems:"center",justifyContent:"center"}}> 
           <Link to={`/teacher/${items._id}`}>
           <Button size="large">{items.name}</Button> 

           </Link>
           </CardActions> 
           </Card> 
           </Container> 
           </Grid>
           
           
            </> ))}

     


     
</Grid>

     
     }
      </Box>
      
      </Container>
      </div>
      );
}
// const mapsteatetoprops=(state)=>{
// console.log("mapstate",state.ThecherList.theacher);
// return{
//   theacher:state.ThecherList.theacher,
//   loading:state.ThecherList.loading
// }

// }
// export default  connect(mapsteatetoprops)(Theachers);
export default Theachers;
