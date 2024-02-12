
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserDetilAction } from './../../redux/action/UserdetilAction';
import './userdetilcourse.css'
import { Container, Box, Typography, Slide, CircularProgress } from '@mui/material';
import UserDetil from './../User-detil/UserDetil';
const UserDetilCoursese = () => {
    const dispatch=useDispatch()
    const user=useSelector(state=>state.USERreducer)
console.log("user._id",user._id);
const [loading,setLoading]=useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            if(user?._id==undefined){
               return null
            }else{
                dispatch(UserDetilAction(user._id))

            }

        }, 0);
        return () => {
            setLoading(false)
          }

    }, [user._id])
    const userdeticourse=useSelector(state=>state.userdetilReducer)
    console.log("userdeticourse",userdeticourse.user.basket?.course);



    return ( 
        <Box height="65vh" style={{display:"flex",borderRadius:'5px',textAlign:"center",alignItems: 'center'}}>
                        <UserDetil/>
                        <Slide direction="right" in={loading}
              mountOnEnter unmountOnExit
            >
                        {user?._id==undefined?<Typography className='text_usercourse' sx={{padding:"10px",fontFamily:"tanha"}}>درحال بررسی...</Typography>:
                        
                        
                        <Container>


    {!userdeticourse.user?.basket || userdeticourse.user?.basket?.course.length==0 ?<Box sx={{padding:"1px",fontFamily:"tanha"}}>
    <Typography sx={{padding:"1px",fontFamily:"tanha"}} variant='h2'>دوره ای یافت نشد</Typography>:
    
    </Box>:
    <Container>
    
    
<Typography className='text_usercourse' sx={{padding:"10px",fontFamily:"tanha"}} variant='h3'>دورهای خریداری شده</Typography>
        <Typography className='text_usercourse' sx={{padding:"1px",fontFamily:"tanha"}} variant='h5'>تعداد دوره ها:{userdeticourse.user?.basket?.course.length}</Typography>
<Container> 
        <ul className='user_detil_course'>
        {userdeticourse.user?.basket?.course.map(item=>{

           return( 
               
                   <li >{item.name}</li>
           )
        })}
                       </ul>
                       </Container>
    </Container>
    
    
    
    }
 
  
</Container>
                        
                        }


</Slide>
        </Box>
     );
}
 
export default UserDetilCoursese;