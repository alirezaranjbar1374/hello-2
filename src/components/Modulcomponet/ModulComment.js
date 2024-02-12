




import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Drft from '../DRFT/Drft';
import { EditorState } from 'draft-js';
import { isEmpty } from "lodash";
import swal from "sweetalert";
import axios from 'axios';
import AlertCustome from '../../utils/Alert/Alert';
import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import CommentUntil from '../../utils/Commentuntil/CommentUntl';



export default function ModulComment({url,id,blog}) {
  const [open, setOpen] = React.useState(false);
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
  const [titleArticel,settitleArticel]=React.useState("111")
  const [Alertopen, setAlertopen] = React.useState(false);

  const navigate = useNavigate();

  
  
  let titleDreft="مقاله"
  const [text, setText] = React.useState("");

  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);

    let text = editorState.getCurrentContent().getPlainText("\u0001");
    setText(text);
    console.log("JKKJKJ",text,id);

  };

       
  const UserDetil=useSelector(state=>state.USERreducer)

  const handleClickOpen = () => {
    setOpen(true);
  };
const handleClose=()=>{
    setOpen(false);

}


let urlbase=url?url:"CreateArticelComment"
let BlogOrCourse=urlbase =="CreateArticelComment"?"blog":"course"
  const SendReplayComment = () => {
    const body={
      parent:id,
      text:text,
      BlogOrCourse:blog,
      user:UserDetil._id
  }
  body[BlogOrCourse]=blog

  console.log("body",body,"BlogOrCourse",BlogOrCourse);
    // const [open, setOpen] = React.useState(false);
 
  CommentUntil(urlbase,body,blog,UserDetil,navigate,setOpen,setAlertopen,setEditorState)


  };

  return (
    <div>
      <Button style={{height:"30px",width:'76px'}} variant="contained" onClick={handleClickOpen}>
        ثبت نظر 
      </Button>
      <AlertCustome setAlertopen={setAlertopen} text="کامنت با موفقیت ثبت شد" Alertopen={Alertopen} severity="success" />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>تاپلرن</DialogTitle>
        <DialogContent>
          <DialogContentText>
            نظر شما پس از تایید قابل نمایش است
          </DialogContentText>
        
          <Drft  titleDreft={titleDreft} editorState={editorState} onEditorStateChange={onEditorStateChange}/>
        </DialogContent>
        <DialogActions>

          <Button style={{margin:5}} color='info' variant='contained' onClick={handleClose}>انصراف</Button>
          <Button color='success' variant='contained' onClick={SendReplayComment}>ارسال نظر</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}