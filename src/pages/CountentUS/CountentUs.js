import { Box, Card, TextField,Grid, TextareaAutosize, Button, Typography, Container } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import RtlContainer from "../../utils/RtlContainer/RtlContainer";
import './contentus.css'
import axios from "axios";
import { useEffect, useState } from "react";
import BreadcrumbBase from "../../utils/BreadcrumbBase/BreadcrumbBase";
// import captchapng from "captchapng";
const CountentUs=()=>{
    const [imagbase,setImagbase]=useState("")
    const [coatchanum,setCoatchanum]=useState("")
    const [privccode,setPrivicode]=useState()
    useEffect(() => {
        axios.get("http://localhost:3001/api/user/recptcha").then(res=>{
            console.log("res",res);
     setImagbase(res.data.img)
     setCoatchanum(res.data.CAPTCHA_NUM)
        })
    }, [])
   const sendcontentus=e=>{
    e.preventDefault()
    console.log("slm",privccode);

    if(coatchanum==privccode){
        alert("trure")
    }
    else{
        alert("false")
    }
   }
    return(
        <RtlContainer >
            <Container>
            <BreadcrumbBase one="اندیش لرن" two="تماس با ما" three="آدرس شرکت"/>

            </Container>

            <Grid height="65vh" sx={{textAlign:"center",display:"flex",margin:10,padding:"10px",alignItems:"center"}}>
                
            {/* <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path className="footer-social-icon-path" d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
            </svg>
            <div class="custom-shape-divider-bottom-1669610166">
            <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill" fill="#FFFFFF" fill-opacity="1"></path></svg>
            </div> */}
            <Grid className="gird-form"   height="60vh" sx={{margin:10}} lg={6} md={6} xl={6} sm={12} xs={12} >
    <Grid sx={{margin:3}} xl={12} >
    <TextField  className="alit"   label="نام ونام خانوادگی" sx={{"& .MuiInputLabel-outlined":{fontFamily:"tanha",fontSize:"14px",color:"skyblue"},marginTop:3}}  variant="outlined" color="success"  />

    </Grid>
    <Grid sx={{margin:3}} xl={12}>
    <TextField label="ایمیل" sx={{"& .MuiInputLabel-outlined":{fontFamily:"tanha",fontSize:"14px",color:"skyblue"}}} variant="outlined" color="success"  />

</Grid>
<Grid sx={{margin:3}} xl={12}>
    <TextField label="شماره موبایل" sx={{"& .MuiInputLabel-outlined":{fontFamily:"tanha",fontSize:"14px",color:"skyblue"}}} variant="outlined" color="success"  />

</Grid>

{       <img src={`data:image/jpeg;base64,${imagbase}`} />
}
<Grid sx={{margin:0}} xl={12}>

    <TextField  value={privccode}
onChange={(e)=>setPrivicode(e.target.value)}
     sx={{"& .MuiInputLabel-outlined":{fontFamily:"tanha",fontSize:"14px",color:"skyblue"}}} label="کد امنیتی را وارد کنید" variant="standard" color="info"  />

</Grid>
<Grid sx={{margin:0}} xl={12}>

<TextareaAutosize  

  aria-label="empty textarea"
  className="alit"
  placeholder="هرچه میخاهد دل تنگت بگو"
  style={{ width:{sm:"20px",xl:"600",lg:"400"} ,height:"100px",fontFamily:"tanha",fontSize:"14px",paddingTop:"20",borderRadius:"3px",marginTop:"10px"}}
/>
</Grid>


<Button onClick={sendcontentus} variant="contained" size="large" color="success" startIcon={<SendIcon />}>
  ارسال
</Button>
</Grid>

<Grid sx={{textAlign:"center",alignItems:"center"}} lg={6} md={6} xl={6} sm={12} xs={12}>
    <Typography variant="h3" >موقعیت ماکانی ما</Typography>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483.612038305087!2d51.386036250498336!3d35.65715060626115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1669544365490!5m2!1sfa!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</Grid>
            </Grid>


        </RtlContainer>
    )
}
export default CountentUs;