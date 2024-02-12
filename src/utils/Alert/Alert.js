import React from 'react'
import {  Snackbar, Stack,Alert } from '@mui/material';

export default function AlertCustome({severity,Alertopen,text,setAlertopen}) {
    const [open, setOpen] = React.useState(Alertopen);


    document.querySelectorAll(".csChqStsList .dijitCheckBoxInput")

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertopen(false)
    
    setOpen(false);
  };
  return (
    <Snackbar   anchorOrigin={{vertical: 'top',horizontal: 'right'}} open={Alertopen} autoHideDuration={1900} onClose={handleClose1}>
    <Stack  spacing={2} sx={{ width: '100%',height:50,color:"white" }}>

    <Alert  variant="outlined" color={severity} severity={severity}>
    {text}
    </Alert>
    </Stack>

    </Snackbar>
  )
}
