import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import RtlContainer from "../RtlContainer/RtlContainer";
import { Box } from '@mui/material';

const BreadcrumbBase=({one,two,three,four})=>{
    
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  
    return (
        <RtlContainer s>
                <Box sx={{mt:4}} role="presentation" onClick={handleClick}>
      <Breadcrumbs  aria-label="breadcrumb">
        <Link  underline="hover" color="inherit" href="/">
      {one}
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          {two}
        </Link>
        <Link       underline="hover"
          color="inherit">{three}</Link>
      </Breadcrumbs>
    </Box>

        </RtlContainer>
    )
}

export default BreadcrumbBase;