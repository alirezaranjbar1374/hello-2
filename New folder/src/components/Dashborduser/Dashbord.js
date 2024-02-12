import { Container, Typography,Card, Slide } from "@mui/material";
import { Box, textAlign } from "@mui/system";
import UserDetil from './../User-detil/UserDetil';
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";

const DashbordUser = () => {
    const user=useSelector(state=>state.USERreducer)
    const [loading,setLoading]=useState(false)
    useEffect(() => {
      
    setLoading(true)
      return () => {
        setLoading(false)
      }
    }, [])
    

    return ( 
 
        <Box height="65vh" style={{display:"flex",borderRadius:'5px',textAlign:"center",alignItems: 'center'}}>
           
            <UserDetil/>
            <Slide direction="right" in={loading}
              mountOnEnter unmountOnExit
            >
            <Box sx={{width:'100%',margin:"5%",textAlign:"center"}}>
          <Card>
              <Box sx={{padding:"40px",margin:"5%"}}>
            
                  <Typography variant="h4">اطلاعات حساب کاربری</Typography>
                  <hr/>
                
              </Box>
              <Container sx={{display:"flex",justifyContent:"space-around",padding:"20px",border:"1px solid black"}}>
                  <Typography variant="h6">نام کاربری:{user.name}</Typography>
                  <Typography variant="h6">ایمیل:{user.email}</Typography>


                  <Typography variant="h6">شماره موبایل:09399123908</Typography>


              </Container>
              
                

          </Card>
            </Box>
            </Slide>

        
  
        </Box>
    
     );
}
 
export default DashbordUser;