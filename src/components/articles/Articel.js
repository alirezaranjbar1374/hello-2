import { Grid4x4, SchoolRounded } from "@mui/icons-material";
import { Chip, Divider, Grid, Slide, Typography,Container } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Typedjs from "../../utils/Typejs/Typedejs";
import MultiActionAreaCard from "../CardArticel/CardArticel";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import "./articel.css"
import { useSelector ,useDispatch} from 'react-redux';
import axios from "axios";
import { ArticelListAction } from "../../redux/action/ParticelAction";


const Articel=({children})=>{
    const [loading, setLoading] = useState(false);
    const articels2=useSelector(state=>console.log("avahghgh",state))

// axios.get("http://localhost:3001/api/user/allarticels").then(res=>{
//     console.log("dadad",res);
// })
  
const dispatch=useDispatch()

    useEffect(() => {
        dispatch(ArticelListAction())
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, [dispatch]);
    const articels=useSelector(state=>state.ArticelReducer.articel)

    return (
     <>
{/* 
<Box class="context">
{children}
<input/>
    </Box>

<Box class="area" >

            <ul class="circles">
                    <li></li>

                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </Box > */}
     <Slide
                    direction="down"
                    in={loading}
                    style={{
                        transitionDelay: loading ? "100ms" : "0ms",
                    }}
                >
                    <Divider 
                        textAlign="center" 
                        sx={{
                            "&::before, &::after": {
                                borderColor: "primary.main",
                            },
                            mb: 3,
                        }}
                    >
                        <Chip className="card_articel"
                            icon={<AutoStoriesIcon  />}
                            color="primary"
                            label={
                                <Typography 
                                    variant="h5"
                                    color="black"
                                    sx={{ textAlign: "center",fontFamily:"tanha" }}
                                >
                                    مقالات
                                </Typography>
                            }
                            sx={{ p: 3,fontFamily:"tanha" }}
                        />
                    </Divider>
                </Slide>
<Typography  className="artticel_title" variant="h4">مقالات جدید</Typography>
<Typedjs/>
    <Grid   container sx={{padding:"10px 20px 10px 10px" , height:"50vh",overflow:"auto",marginBottom:"30px"}} color="pink"  >
        
    {articels.slice(0,4).map(item=>(
            <Grid   xs={12} sm={6} md={4} lg={3} xl={3} key={item._id}>
              <div style={{padding:10}}>
              <MultiActionAreaCard {...item} />
  
  
              </div>
            </Grid>
          ))}


    </Grid>

     </>
    )
}

export default Articel;