import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import  axios  from 'axios';
import Comment from './Alireza2';

const Drft = () => {
    const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [list,setList]=useState([])

  const Fetchedata=()=>{
    axios.get("http://localhost:3001/api/user/getCommentsForPost/643806b60f2571140413e682").then(res=>{
setList(res.data)
    }).catch(err=>{
      console.log("err",err);
    })
  }
let arr=[]
  function ali(arr) {
    arr.map(item=>{
      if(item.children){
 return  item.children.filter(child=>child==item.id).map(item2=>console.log(item2))
       
      }else{
        return console.log("item",item);
      }

    })
  }
  let arr1=[]
  useEffect(() => {
    Fetchedata()
ali(list)
  }, [editorState]);
  for (let index = 0; index < list.length; index++) {
    const element = list[index]
 list.filter(item=>{
  if(item._id==element.children){
    console.log(item);
    arr1.push(item)
  }
 })
 console.log("arr1",arr1);
    
  }
  function mapComments(comments, parentId = null) {
    return comments
      .filter(comment => comment.parent === parentId)
      .map(comment => {
        const children = mapComments(comments, comment._id);
        return { ...comment, children };
      });
  }
  
  const myNestedArray = [
    {
      "children": [
        "64390221cab8bf0630d6fc13"
      ],
      "_id": "643901c0cab8bf0630d6fc0e",
      "text": "slm_ali",
      "__v": 1
    },
    {
      "children": [],
      "_id": "643901d8cab8bf0630d6fc10",
      "text": "slm_reza",
      "__v": 0
    },
    {
      "children": [
        "64390254cab8bf0630d6fc17"
      ],
      "_id": "64390221cab8bf0630d6fc13",
      "text": "slm_ali_one replay",
      "parent": "643901c0cab8bf0630d6fc0e",
      "__v": 1
    },
    {
      "children": [
        "64390265cab8bf0630d6fc1b"
      ],
      "_id": "64390254cab8bf0630d6fc17",
      "text": "slm_ali_one replay-replay to",
      "parent": "64390221cab8bf0630d6fc13",
      "__v": 1
    },
    {
      "children": [
        "6439029bcab8bf0630d6fc22"
      ],
      "_id": "64390265cab8bf0630d6fc1b",
      "text": "slm_ali_one replay-replay to replay",
      "parent": "64390254cab8bf0630d6fc17",
      "__v": 1
    },
    {
      "children": [],
      "_id": "6439029bcab8bf0630d6fc22",
      "text": "slm_ali_one replay-replay to replay and replay",
      "parent": "64390265cab8bf0630d6fc1b",
      "__v": 0
    }
  ];
  
  function mapReplies(comment) {
    return {
      id: comment._id,
      text: comment.text,
      children: comment.children.map(replyId => {
        const reply = myNestedArray.find(c => c._id === replyId);
        return reply ? mapReplies(reply) : null;
      }).filter(Boolean)
    }
  }
  
  const myMappedArray = myNestedArray.filter(c => !c.parent).map(mapReplies);
  
  console.log("myMappedArray",myMappedArray);
  const mappedComments = mapComments(list);
  console.log("mappedComments",mappedComments);
  
    return ( 
        <>
            <div style={{marginTop:"60px",padding:"0%",marginBottom:"300px"}}>
      <h1>اشتراک گذاری نظر</h1>
      <h2>نظرات کاربران در رابطه با این دوره</h2>
      <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
        <Editor  style={{direction:"rtl"}}
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
    </div>
    {list.map(comment => (
  <div key={comment._id}>
    <p>{comment.text}</p>
    {comment.children.length > 0 && (
      <div style={{ marginLeft: '1em' }}>
        {comment.children.map(childId => {
          const childComment = list.find(c => c._id === childId);
          console.log("comment.children",comment.children[0]);
          console.log("childComment._id",childComment._id);
          return childComment && <p key={childComment._id}>{comment.children[0]==childComment._id && childComment.text}</p>;
        })}
      </div>
    )}
  </div>
))}

        </>
     );
}
 
export default Drft;