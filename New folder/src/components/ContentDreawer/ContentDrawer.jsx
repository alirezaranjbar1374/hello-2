import { TreeItem, TreeView } from "@mui/lab";
import { Box, Container, Divider, Grid, TextField, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./contentdreawer.css"
const ContentDrawer=()=>{
    return(
        <Box >

   <Grid>
   <Container   >
   <div class="constrain">

<input  class="input-elevated" type="text" placeholder="Search"/>





  
</div>
    <Typography  variant="h5" color="coral">دوره های آموزشی</Typography>
<Divider sx={{background:"#ffff",padding:0.1}}/>
 <TreeView  
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: "auto", flexGrow: 1, maxWidth:800, overflowY: 'auto' ,direction:"rtl",width:"100%"}}
    >
      <TreeItem   sx={{"& .MuiTreeItem-label":{fontFamily:"vazir",margin:1}}}  nodeId="01" label="فرانت">
      <TreeItem    sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}}  nodeId="2" label="جاوااسکریپت" >
      <TreeItem  sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="30" label="ری اکت" />
      <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="300" label="ری اکت نیتو" />

      <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="31" label="نود جی اس" />
      <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="32" label="تری جی اس" />
      <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="33" label="انگولار" />
      <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="34" label="ویو جی اس" />



      </TreeItem>
      <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="4" label="wordpress" />
 

      </TreeItem>
      <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir",margin:1}}} nodeId="5" label="بک اند">
        <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="10" label="php" />
        <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="6" label="python">
        <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="8" label="django" />
        <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="8" label="fast-api" />
        </TreeItem>
      </TreeItem>
      <TreeItem    sx={{"& .MuiTreeItem-label":{fontFamily:"vazir",margin:1}}}  nodeId="20" label="امنیت" >
      <TreeItem  sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="300" label="ری اکت" />
      <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="3000" label="ری اکت نیتو" />

      <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="30" label="نود جی اس" />
      <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="30" label="تری جی اس" />
      



      </TreeItem>
    </TreeView>
    
   </Container>
   
   </Grid>

<Grid>
<Container   >

    <Typography  variant="h5" color="coral">منوی دسترسی</Typography>
<Divider sx={{background:"#ffff",padding:0.1}}/>
 <TreeView  
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: "auto", flexGrow: 1, maxWidth:800, overflowY: 'auto' ,direction:"rtl",width:"100%"}}
    >
            <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="100" label="صفحه اصلی" />
            <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="101" label="درباره ما" />
            <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="102" label="خدمات" />
            <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="103" label="تماس با ما" />
            <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="104" label="مدرسین" />


    </TreeView>
    
   </Container>
   
</Grid>
<Grid>
<Container   >

    <Typography  variant="h5" color="coral">سایر </Typography>
<Divider sx={{background:"#ffff",padding:0.1}}/>
 <TreeView  
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 400, flexGrow: 1, maxWidth:800, overflowY: 'auto' ,direction:"rtl",width:"100%"}}
    >
            <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="105" label="مدرسین" />
            <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="106" label="درخواست تشکیل کلاس" />
            <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="107" label="همکاری با ما" />
            <TreeItem sx={{"& .MuiTreeItem-label":{fontFamily:"vazir"}}} nodeId="108" label="پرسش وپاسخ" />



    </TreeView>
    
   </Container>
   
</Grid>



 

       
        </Box>
    )
}
export default ContentDrawer;