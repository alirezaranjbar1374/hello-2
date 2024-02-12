import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Container } from "@mui/material";
import "./index.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Drft from './../DRFT/Drft';
import Detilcours from "../DetilCourse/Detilcours";
const Courses = (props) => {
  const [data, setDta] = useState([]);
  const [price, setPrice] = useState("");

  const params = useParams();
  // let arr = [];
  // ("propsCOURSE",props);
  const navigate = useNavigate();

  useEffect(() => {
    if (props._id == params.id) {
    //   console.log("ppop", props.price);
      setDta(props.video);
      setPrice(props.price);
    }
  }, [data]);
  const addTocart = () => {
    navigate(`/cart/${params.id}`);
    // console.log("pararms", params.id);
  };

  // const findCourse=props.find(item=>item._id=params.id)
  // console.log("findCourse",findCourse);
  return (
    <>
    
    <div
      className="course_bg"
      style={
        price.length == 0
          ? { display: "block" }
          : {
              display: "flex",
              padding: "20px",
              width: "100%",
              justifyContent: "space-around",
            }
      }
    >
      <div
        className="course_DEtil"
        style={
          price.length == 0
            ? { display: "none" }
            : { padding: "2px", width: "100%" }
        }
      >
        <Grid>
          <Box
            style={{
              border: "1px ",
              padding: "2rem",
              margin: "2rem",
            }}
          >
            <h1>{props.name}</h1>
            <h3>
              مدرس دوره:<span>ایمان مندانی</span>
            </h3>
<div>
وضعیت دوره :<h3>درحال برگزاری...</h3>

</div>
            <Detilcours description={props.description}/>

            <Container>
              <Container style={{ width: "300px", textAlign: "center" }}>
                <p>
                  <span> قیمت دوره:</span>{" "}
                  <h3 style={{ color: "black" }}>{price}</h3>
                </p>

                {price.length == 0 ? (
                  ""
                ) : (
                  <div
                    style={{
                      background: "green",
                      color: "wheat",
                      padding: "23px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={addTocart}
                  >
                    افزودن به سبد خرید
                  </div>
                )}
              </Container>
            </Container>
          </Box>

        </Grid>

        <div style={{  margin: "0px 90px 0px 90px" }}>
          <ul>
            {data.map((item, index) => (





              <li key={item._id}>

            
                  <p
            
                  >
                  </p>
             


<div style={{direction:""}}>
        <Accordion className='acored_text'>
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
              <div >
              <Typography style={{textAlign:"center"}} >{item.title}</Typography>
              {/* <span>{index + 1}</span> */}




              </div>

          </AccordionSummary>

          <AccordionDetails>
            <>
            <ReactPlayer
                      width="100%"
                      height="100%"
                      light={true}
                      controls
                      url={item.video}
                      style={{width:"64px",height:"64px"}}
                    />
            </>
          </AccordionDetails>
        </Accordion>
 
  
      </div>

                  
              </li>
            ))}
          </ul>

        </div>

        
      </div>
    </div>
   

    </>
    
  );
};

export default Courses;
