import { useEffect, useRef, useState } from "react";
import {  EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Drft = ({onEditorStateChange,editorState,titleDreft,refAnsweComment}) => {


const refdad=useRef(refAnsweComment)
  
    return ( 
        <>
            <div style={{marginTop:"0px",padding:"0%"}}>
      <h1>اشتراک گذاری نظر</h1>
      <h2>نظرات کاربران در رابطه با این {titleDreft}</h2>
      <div style={{ border: "1px solid black", padding: '20px', minHeight: '200px' }}>
        <Editor ref={refdad}   style={{direction:"rtl"}}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
        
        </>
     );
}
 
export default Drft;





