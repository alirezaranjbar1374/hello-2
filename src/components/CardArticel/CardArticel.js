import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard(props) {
  return (
    <Card   sx={{ maxWidth: 295,marginBottom:"30px"}}>
      <CardActionArea  >
        <CardMedia  
          component="img"
          sx={{height:{xs:"80",sx:"100",lg:"120px"}}}
          image={props.cover}
          alt="green iguana"
        />
        <CardContent  sx={{height:{xs:"30",sx:"30",md:"60",lg:"70px",xl:"70"}}} >
          <Typography  gutterBottom variant="h5" component="div">
          {props.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
{
  props.description
}          </Typography>
<Typography variant="body2" color="text.secondary">
  <EllipsisText text={props.body} length="75"/>
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions  sx={{mt:3}} >

        <Button    className='card_articel' size="medium" sx={{color:"black",background:"black"}}>
   <Link to={`ArticelDetil/${props.shortName}`}>ادامه مطلب</Link>
        </Button>
      </CardActions>
    </Card>
  );
}