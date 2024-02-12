import { AppBar, Container, Toolbar, Typography,DialogContentText,DialogContent,DialogActions, Hidden } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';

import './navbar.css'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import ClearIcon from '@mui/icons-material/Clear';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {ArrowDropUp} from '@mui/icons-material';
import Diyalog from './../Diyalog/Diyalog';
import TemporaryDrawer from '../Drawer/Drawer';
import Articel from '../articles/Articel';


const Navbar = () => {
   
   
  const [togelShow,setTtogelShow]=useState("slm")
  const [view,setView]=useState("show-one")
  const [view1,setView1]=useState("show-one")
  const navigate = useNavigate();


  const hoversidebar =()=>{
    setView("")
  }
  const clreaHover=()=>{

    setView("show-one")

  }
  const hoversidebar1 =()=>{
    // console.log("jhhj");
    setView1("")
  }
  const clreaHover1=()=>{
    // console.log("123");

    setView1("show-one")

  }

const handelShowTogel=()=>{
  if(togelShow=="slm"){
    setTtogelShow("show")
  } else if(togelShow=="show"){
    setTtogelShow("slm")
  }
}

const user=useSelector(state=>state.USERreducer)







const [open, setOpen] = React.useState(false);
const [opendiylog, setOpendiylog] =useState(false);
const [uId,setUId]=useState("")
const anchorRef = React.useRef(null);

const handleClickOpen1 = () => {
    

  setOpendiylog(true);




  

};
const handleClosedyalog = () => {
  setOpendiylog(false);
};
const handleToggle = () => {
  setOpen((prevOpen) => !prevOpen);
  
};

const handleClose = (event) => {
  if (anchorRef.current && anchorRef.current.contains(event.target)) {
    return;
  }

  setOpen(false);
};
const handellogout=()=>{
  navigate("/logout")
  
}
function handleListKeyDown(event) {
  if (event.key === 'Tab') {
    event.preventDefault();
    setOpen(false);
  } else if (event.key === 'Escape') {
    setOpen(false);
  }
}

const prevOpen = React.useRef(open);
React.useEffect(() => {
  // if (prevOpen.current === true && open === false) {
  //   anchorRef.current.focus();
  // }
setOpendiylog(false)
  prevOpen.current = open;
}, [open]);
    return (
       
<div className='containerasli'> 
<Hidden lgUp>
  
<TemporaryDrawer handellogout={handellogout} open1={open} anchorRef={anchorRef} handleToggle={handleToggle}  handleClosedyalog={handleClosedyalog} handleClickOpen1={handleClickOpen1} handleListKeyDown={handleListKeyDown} handleClose={handleClose} />

  </Hidden> 

<Hidden lgDown>
<AppBar className='navabar_bg'   position='relative' color='default'>
  

 <Container >
  
 <Toolbar>
 <span onClick={handelShowTogel} className='togel'>
  
  {togelShow=="slm" ? <DensityMediumIcon/>:   <ClearIcon/>}
 </span>
 <AppBar  className={`saidebar-right ${togelShow}`}>
  <ul  className=' ul-saidebar'>

  <li className='li-saidebar-open'><a href="#">صفحه اصلی</a></li>
    <li className='li-saidebar-open' onMouseLeave={clreaHover} onMouseEnter={hoversidebar}><a href="#">فرانت</a>
      <ul className={`dropdown ${view} ul-navbar-saiderbar `}>
        <li className='hover-open'><a href="#">اچ تی ام ال</a></li>
        <li className='hover-open'><a href="#">جاوااسکریپت</a></li>
        <li className='hover-open'><a href="#">ری اکت</a></li>
        <li className='hover-open'><a href="#">ویو جی اس</a></li>
      </ul>
    </li>
    <li className='li-saidebar-open' onMouseLeave={clreaHover1} onMouseEnter={hoversidebar1}><a href="#">بک</a>
      <ul className={`dropdown ${view1} ul-navbar-saiderbar `}>
        <li className='hover-open'><a href="#">جنگو</a></li>
        <li className='hover-open'><a href="#">پی اچ پی</a></li>
        <li className='hover-open'><a href="#">دات نت</a></li>
        <li className='hover-open'><a href="#">نودجی اس</a></li>
      </ul>
    </li>
    <li className='li-saidebar-open'><a href="#"> <Link to='about'/> </a>درباره ما</li>
    <li className='li-saidebar-open'><a href="#"><Link to='countentus'/>همکاری با ما</a></li>

  </ul>
</AppBar>


  <nav role="navigation" className="primary-navigation">
   
  <ul className='ul-navbar'>
  <Container>
    {/* <TemporaryDrawer/> */}

    <li><Link to='/'>صفحه اصلی</Link></li>
    <li ><a href="#">فرانت</a>
      <ul className="dropdown ul-navbar ">
        <li><a href="#">اچ تی ام ال</a></li>
        <li><a href="#">جاوااسکریپت</a></li>
        <li><a href="#">ری اکت</a></li>
        <li><a href="#">ویو جی اس</a></li>
      </ul>
    </li>
    <li><a href="#">بک</a>
      <ul className="dropdown ul-navbar">
        <li><a href="#">جنگو</a></li>
        <li><a href="#">پی اچ پی</a></li>
        <li><a href="#">دات نت</a></li>
        <li><a href="#">نودجی اس</a></li>
      </ul>
    </li>
    <li><a href="#"><Link to='/about'>درباره ما</Link></a></li>
    
    <li><a href="#"> <Link to='countentus'>همکاری با ما</Link></a></li>
    <li style={{borderLeft:"none"}}><Link to='teachers'>مدرسین</Link></li>
    </Container>

  </ul>

</nav>
<ul className='ul-navbar-left'>
  {!isEmpty(user)?
  <>
  <li>

        <span 
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
     <span style={{display:"flex",alignItems:"center"}}>           {open?<ArrowDropUp/>:<ArrowDropDownIcon/>}   

<Typography sx={{fontFamily:"tanha"}} variant='h5'>{user.name}</Typography></span>
        </span>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList className='user_detil_MenuList'
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}><li><Link to='userdetil'>حساب کاربری</Link></li></MenuItem>
                    <MenuItem onClick={handleClose}><li><Link to=''>نیکت ها</Link></li></MenuItem>
                    <MenuItem sx={{fontFamily:"tanha",fontSize:"1.3rem"}} onClick={handleClickOpen1} ><li  onClick={handleClickOpen1}>خروج</li></MenuItem>
       
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      
        <Diyalog    handleClosedyalog={handleClosedyalog} opendiyalog={opendiylog} >

<DialogContent>
<DialogContentText >

{user.name}میخای خارج شی از سایتمون ؟

</DialogContentText>
</DialogContent>
<DialogActions>
<Button style={{color:"#ffff",background:"green",fontSize:15}} autoFocus onClick={handleClosedyalog}>
نه منصرف شدم
</Button>
<Button style={{color:"#ffff",background:"red" ,margin:10,fontSize:17}} onClick={handellogout}>میرم برمیگردم بابا</Button>
</DialogActions>
</Diyalog>
    
    
 </li>
 
  
  </>


  :
    

  <li><Link to='login'>ورود/عضویت</Link></li>


}


  </ul>
 
  </Toolbar>
 </Container>
</AppBar>
 </Hidden>

</div>

      );
}
 
export default Navbar;
