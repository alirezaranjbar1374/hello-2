import { Container } from '@mui/material';
import "./footer.css"
import { Box,Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (  
<footer  className="footer-container">
<Container style={{display:"flex",justifyContent:"space-around"}}>
    <Box  style={{flexDirection:"column",width:"160px",height:"100px"}}>
        <img width="100px" src='https://toplearn.com/img/user/250x259/user-profile-%D8%B3%D9%87-%D8%B4%D9%86%D8%A8%D9%87-%DB%B1%DB%B5-%D9%85%D8%B1%D8%AF%D8%A7%D8%AF-%DB%B1%DB%B3%DB%B9%DB%B8-47173843-1135.png'/>
        <h4>
        رستوران ناتو سریعترین راه سفارش آنلاین غذا است. منوی عکس‌دار رستوران‌های اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و سفارش دهید.
        </h4>
    </Box>
<Box>
    <ul>
        <h1>با ما درارتباط باشید</h1>
        <li className='li-footer'>صفحه اصلی</li>
        <li className='li-footer'>دوره ها</li>
        <li className='li-footer'>مدرسین</li>
        <li className='li-footer'>همکاری با ما</li>
        <li className='li-footer'>ارتباط باما</li>

    </ul>
</Box>
<Box>
    <ul>
        <h1>بیشتربدانید</h1>
        <li className='li-footer'>سوالات متدوال</li>
        <li className='li-footer'>پرسش وپاسخ</li>
        <li className='li-footer'>قوانین سایت</li>
        <li className='li-footer'>همکاری با ما</li>

    </ul>
</Box>
<Box style={{textAlign:"center",alignItems:"center",width:"400px"}}>
<ul>
    <h3>برای غضویت در خبرنامه و دریافت جدید ترین دوره ها و مطالب ایمیل خودرا واردکنید</h3>
    <li className='li-footer'>
<input style={{padding:10}} placeholder='ایمیل'/>
    <Button style={{padding:7,width:60,borderRadius:0}} variant="contained"  color="success">
        عضویت
</Button>
</li>
</ul>
</Box>
</Container>
<hr style={{color:"#ffff",background:"red",width:"100%",height:2}}/>
    <Container style={{textAlign:"center" ,alignItems:"center" ,width:"400px"}}>
        <h2>صفحات اجتماعی</h2>
        <Box style={{textAlign:"center"}}>
            <ul style={{textAlign:"center", display:"flex" ,justifyContent:"space-between"}}>
                <li className='li-footer icon'>
                    <InstagramIcon/>
                </li>
                <li className='li-footer icon'>
                    <YouTubeIcon/>
                </li>
                <li className='li-footer icon'>
                    <GitHubIcon/>
                </li>
                <li className='li-footer icon'>
                    <LinkedInIcon/>
                </li>


            </ul>
        </Box>
    </Container>

</footer>
        
    );
}
 
export default Footer;