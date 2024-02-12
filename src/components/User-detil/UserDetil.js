import { Box } from "@mui/system";
import { Container } from '@mui/material';
import './userdetil.css'
import { Link } from 'react-router-dom';
const UserDetil = () => {
    return ( 
        <>
        <Container  sx={{width:'100%',margin:"2%",height:"40vh"}} className="container_saidebar_user">

            <Box>
                <ul className="ul_userdetil">

                    <li><Link to="/DashbordUser">داشبورد</Link></li>
                    <li>ویرایش حساب کاربری</li>
                    
                    <li><Link to="/UserDetilCoursese">دوره های من</Link></li>
                    <li>سوالات من</li>

                </ul>

            </Box>
        </Container>
        </>
     );
}
 
export default UserDetil;