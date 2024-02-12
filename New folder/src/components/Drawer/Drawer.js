

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './drawer.css'
import { Button, ClickAwayListener, Container, DialogActions, DialogContent, DialogContentText, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowDropUp } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import ContentDrawer from '../ContentDreawer/ContentDrawer';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function TemporaryDrawer({handleClose,handleClickOpen1,handleListKeyDown,anchorRef,handleToggle,open1}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const user=useSelector(state=>state.USERreducer)
console.log("userseesd",user);
  return (
    <Box  sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className='appbar' position="fixed" open={open}>
        <Toolbar style={{display:"flex",justifyContent:"space-between"}}>
    
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
            
          </IconButton>
         <Box style={{position:"absolute",left:0}}>
          {/* <Typography  variant='h5'>علیرضارنجبر</Typography> */}
          {!isEmpty(user)?

  <>
  <li>

        <span
          ref={anchorRef}
          id="composition-button"
          aria-controls={open1 ? 'composition-menu' : undefined}
          aria-expanded={open1 ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
     <span style={{display:"flex",alignItems:"center"}}>           {open1?<ArrowDropUp/>:<ArrowDropDownIcon/>}   

<Typography variant='h5'>{user.name}</Typography></span>
        </span>
        <Popper 
          open={open1}
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
                  <MenuList style={{}} className='user_detil_MenuList'
                    autoFocusItem={open1}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}><li><Link to='userdetil'>حساب کاربری</Link></li></MenuItem>
                    <MenuItem onClick={handleClose}><li><Link to=''>نیکت ها</Link></li></MenuItem>
                    <MenuItem onClick={handleClose} ><li ><Link to="/logout">خروج</Link></li></MenuItem>
       
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      
        {/* <Diyalog    handleClosedyalog={handleClosedyalog} opendiyalog={opendiylog} >



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

</Diyalog> */}
    
    
 </li>
 
  
  </>


  :
    

  <li><Link to='login'>ورود/عضویت</Link></li>


}
         </Box>

        </Toolbar>
      </AppBar >
      <Main  open={open}>
        <DrawerHeader  />
 
      </Main>
      <Drawer
       
      
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            color:"#fff",
            background: 'linear-gradient(to right bottom,  #3a6073, #3a6073,#16222a)',
            fontFamily:"inherit",
            
          
        
            
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >

        <DrawerHeader  style={{padding:"19px"}} >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Container >
        <Typography variant="h5">logo</Typography>
       </Container>
     

        </DrawerHeader>
 
        <List className="containerDrewer" >
        <Box >
        <ContentDrawer/>
        </Box>
        </List>
        <Divider />
        










      </Drawer>
    </Box>
  );
}