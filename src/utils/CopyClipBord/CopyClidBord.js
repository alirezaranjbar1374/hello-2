import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const CopyClidBord=({children,valuea})=>{
    const [copytext,setCopytext]=useState("کپی")
    
    
    const onCopy = React.useCallback(() => {
        setCopytext("کپی شده (:")
    }, [])
    
    return(

   
        <CopyToClipboard onCopy={onCopy} text={valuea}>   
            <Tooltip title={copytext} arrow>
     {children}
     </Tooltip>   
        </CopyToClipboard>


 
    )
}

export default CopyClidBord;













