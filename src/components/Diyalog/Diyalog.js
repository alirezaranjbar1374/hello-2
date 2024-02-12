import { Card, Container, Button,Typography,DialogTitle,DialogContentText,DialogContent,DialogActions,Dialog } from '@mui/material';

const Diyalog = ({children,opendiyalog,handleClosedyalog,name}) => {
    console.log("props");
    return ( 
        <Dialog
        open={opendiyalog}
        onClose={handleClosedyalog}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move',color:"red" }} id="draggable-dialog-title">
     {name?"پاک کردن":"خروج"}
        </DialogTitle>
      
 {children}
      </Dialog>
     );
}
 
export default Diyalog;