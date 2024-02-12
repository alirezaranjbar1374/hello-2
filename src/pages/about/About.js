import { Box, Container, Typography } from '@material-ui/core';
import { Slide } from '@mui/material';
import { useEffect, useState } from 'react';
import BreadcrumbBase from '../../utils/BreadcrumbBase/BreadcrumbBase';
import Particel from '../../utils/Particel/Particel';
import SlickSlider from '../../utils/Slickslider/SlickSlider';
import './about.css'
const About =()=>{

    return(
  
        <Box sx={{minHeight:"65vh"}} >
          <Container>
        
<BreadcrumbBase one="اندیش لرن" two="درباره ما" three="تاریخچه"/>

</Container>

        <Container   className='cloud_container' >
    
            <Box className='container-about '  sx={{minHeight:"45vh"}}>
   
            <Box class="center ">
   
  <Box  sx={{fontFamily:"tanha"}} id = "cloud">
    
  <Typography  sx={{fontFamily:"tanha"}} variant='h4'  className='content_cloued'>سایت آموزش</Typography>
    {/* <img className='img_qa_about content_cloued' src='./loading.gif'/> */}

  </Box>



</Box>

<Particel />



<Container>



<p cite="http://www.worldwildlife.org/who/index.html">
تاریخچه:

تاپ لرن یک پلتفرم کاملا متفاوت در زمینه یادگیری و آموزش بوده تا بتواند برای کسب و کار , توسعه و نگهداری نرم افزار , فن آوری های جدید و مهارت های خلاقانه ای که شما به دنبال ان هستید به صورت حرفه ای  آموزش ببینید.

در تاپ لرن همیشه به روز باشید:

اگر شما سعی دارید به صورت فردی برای بالا بردن مهارت های خود در جهت کسب و کار قصد دارید از آموزش آنلاین استفاده کنید : تاپ لرن کی از بهترین گزینه های شما خواهد بود . کافیست با مشاهده بیش از 10 ها ساعت ویدئویی که در سایت به صورت رایگان می باشد مهارت های خود را افزایش دهید . همچنین با هزینه هایی باور نکردنی که برای دوره های خاصی در سایت گذاشته شده است می توانید به صورت حرفه ای مهارت های خود را به سطح حرفه ای برسانید.

امروزه بسیاری از شرکت های بزرگ دنیا با توجه به نیاز های سازمانی  از افراد مورد اعتماد خود در سازمان برای رفع نیازهای خود استفاده می کنند .  با توجه به هزینه آموزش به صورت حضوری  و البته  چالش هایی نظیر مکان , زمان  و همچنین استاد مناسب رو به رو خواهند بود . شرکت ها ی خصوصی و دولتی می توانند با دسترسی به ویدئو های آموزشی تاپ لرن مهارت های کارمندان خود را افزایش دهند تا در واقع با بهره گیری و اپدیت 
</p>
</Container>


            </Box>
           

        </Container>

        </Box>
     
    )
}

export default About;