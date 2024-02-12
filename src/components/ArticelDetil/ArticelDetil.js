import { Card } from "@material-ui/core";
import { ExpandMore } from "@mui/icons-material";
import { Button, CardActions, CardContent, CardHeader, CardMedia, Container, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "swiper";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BreadcrumbBase from "../../utils/BreadcrumbBase/BreadcrumbBase";
import React, { useEffect, useRef, useState } from "react";
import { ArticelListAction } from "../../redux/action/ParticelAction";
import { useSelector ,useDispatch} from 'react-redux';
import CopyClidBord from "../../utils/CopyClipBord/CopyClidBord";
import Drft from "../DRFT/Drft";
import {  EditorState } from "draft-js";
import axios from "axios";
import ArticelComment from "../ArticelComments/ArticelComment";
import AlertCustome from "../../utils/Alert/Alert";
import { isEmpty } from "lodash";
import swal from "sweetalert";

const ArticelDetil =()=>{
  const params = useParams();
  console.log("paramss",params.shortName);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [titleArticel,settitleArticel]=useState("111")
  const [text, setText] = useState("");
  const [Alertopen, setAlertopen] = React.useState(false);
  const navigate = useNavigate();
  const UserDetil=useSelector(state=>state.USERreducer)

  let titleDreft="مقاله"
  const onEditorStateChange = function (editorState) {
    if(!isEmpty(UserDetil)==false){
      swal({
          title:"ابتدا باید لاگین کنید",
          icon:"error",
          buttons:"متوجه شدم"
      })
    setTimeout(() => {
      navigate("/login")
    }, 3000);
  }else{
    setEditorState(editorState);

    let text = editorState.getCurrentContent().getPlainText("\u0001");
    setText(text);
    console.log("jkjkj",text)
  
  }
    
 

  };
  const refAnsweComment=useRef(null)

  const dispatch=useDispatch()

   
    const articels=useSelector(state=>state.ArticelReducer?.articel)

    const findArticel= articels?.find(item=>item.shortName==params.shortName)

    console.log("findArticel",findArticel);
  const SendCommentArticel=(event)=>{
    event.preventDefault();
    if(!isEmpty(UserDetil)==false){
      swal({
          title:"ابتدا باید لاگین کنید",
          icon:"error",
          buttons:"متوجه شدم"
      })
    setTimeout(() => {
      navigate("/login")
    }, 3000);
  }else{
    const body={
      
      text,
      user: UserDetil._id
    }
    if(text.length<3){
      alert("false");return 0
    }
   
    axios.post(`http://localhost:3001/api/user/CreateArticelComment/${findArticel?._id}`,body).then(res=>{
      console.log("resarticlecomment",res);
      setAlertopen(true)
      setEditorState("")


    }).catch(err=>{
    alert("err")
      console.log("ererarticelpost",err);
    })
  }
    
  }
  useEffect(async() => {
    dispatch(await ArticelListAction())
    
  },[dispatch]);
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const SendCommentArticel1 =()=>{
    refAnsweComment.current.focus()
      
  }
  console.log("slmali",text);
    return(
        <Box   height="218vh"  sx={{mb:6}}>

            <Card   sx={{"& .MuiCard-root":{fontFamily:"vazir",margin:1,border:"none"}}}>
                <CardContent  >
<Container>
<Typography  variant="h4">{findArticel?.title}</Typography>
<BreadcrumbBase one="اندیش لرن" two="بلاگ" three={findArticel?.title}/>
</Container>
</CardContent>
            </Card>
    <Container   sx={{mt:3}}>
    <Card   >
      <Container  >
      <CardMedia className="card_img"
      sx={{mt:4}} 
        component="img"
        height="494"
        width="400"
        image={findArticel?.cover}
        alt="Paella dish"
      />
        <CardContent className="card_img" sx={{borderBottomStyle:"none"}}>
            <Container>
            <Typography  paragraph>
{findArticel?.body.substring(0,2000)}


          </Typography>
            </Container>
    
        </CardContent>
        <CardActions  disableSpacing>
        <IconButton className="card_articel" aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton  className="card_articel" aria-label="share">

        <CopyClidBord valuea={findArticel?.body}>
          <ContentCopyIcon  />
        </CopyClidBord>
        </IconButton>

      
        <Button 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
          <IconButton className="card_articel" aria-label="share">
          <ShareIcon  />
        </IconButton>
  
        
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          'fontFamily':"tanha"
        }}
      >
        <MenuItem sx={{fontFamily:"tanha"}} onClick={handleClose}>  واتس آپ</MenuItem>
        <MenuItem sx={{fontFamily:"tanha"}}  onClick={handleClose}><a  href="https://telegram.me/share/url?url=<?php the_permalink(); ?>">اشتراک در تلگرام</a> </MenuItem>
        <MenuItem sx={{fontFamily:"tanha"}} onClick={handleClose}>لینکدین</MenuItem>
      </Menu>
        {/* <ExpandMore
  
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
        
      </CardActions>
      
      </Container>
            </Card>
      
    </Container>
    <Container  >
   <div style={{background:'#ffff',borderRadius:"7px",padding:"30px",marginBottom:"10px",position:"relative"}}>
          <Drft  refAnsweComment={refAnsweComment} titleDreft={titleDreft} editorState={editorState} onEditorStateChange={onEditorStateChange} />
          <Button onClick={SendCommentArticel} size="large" variant="contained" sx={{mt:3}}>ارسال نظر</Button>

          <Container>
          <AlertCustome setAlertopen={setAlertopen} text="کامنت با موفقیت ثبت شد" Alertopen={Alertopen} severity="success" />

          
            <ArticelComment  SendCommentArticel={SendCommentArticel} id={findArticel?._id} />

    

          </Container>

          </div>
          
          </Container>
        
        </Box>
    )
}
export default ArticelDetil;