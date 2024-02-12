import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

// import { ComponentToPrint } from './ComponentToPrint';

const Printto =({children})=>{

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle:"خرید"
    });

    return(
        <Box ref={componentRef} textAlign="center">
            {children}
          <Button variant='contained' color='success' size='large' sx={{fontFamily:"tanha",m:3}}  onClick={handlePrint}>پرینت</Button>
        </Box>
    )
}
export default Printto;


//   return (
//     <div>
//       <ComponentToPrint ref={componentRef} />
//       <button onClick={handlePrint}>Print this out!</button>
//     </div>
//   );
// };