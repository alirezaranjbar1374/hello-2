import { Card } from "@material-ui/core";
import { ExpandMore } from "@mui/icons-material";
import { Button, CardActions, CardContent, CardHeader, CardMedia, Container, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "swiper";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useParams } from "react-router-dom";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BreadcrumbBase from "../../utils/BreadcrumbBase/BreadcrumbBase";
import React, { useEffect } from "react";
import { ArticelListAction } from "../../redux/action/ParticelAction";
import { useSelector ,useDispatch} from 'react-redux';
import CopyClidBord from "../../utils/CopyClipBord/CopyClidBord";

const ArticelDetil =()=>{
  const params = useParams();
  console.log("paramss",params.shortName);

  const dispatch=useDispatch()

    useEffect(async() => {
      dispatch(await ArticelListAction())
      
    },[dispatch]);
    const articels=useSelector(state=>state.ArticelReducer.articel)
    const findArticel= articels.find(item=>item.shortName==params.shortName)
    console.log("findArticel",findArticel?.cover);
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
    return(
        <Box   height="110vh"  sx={{mb:6}}>

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
{findArticel?.body}


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
 
        </Box>
    )
}
export default ArticelDetil;