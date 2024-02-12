import { Box, Typography } from "@material-ui/core";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Typedjs=()=>{
    const textOneEl=useRef(null);
    const textTwoEl=useRef(null)
    const string=[
        "سلام این سایت آموزشی برای برنامه نویسی است",
        "اینجا میتونی خیلی راحت برنامه نویس بشی دوست من"
    ]

    useEffect(() => {
const typeName= new Typed(textOneEl.current,{
    strings:["ایران آموزش"],
    typeSpeed:50,
    backSpeed:20,
    backDelay:10,
    showCursor:false

})
const typeInfo= new Typed(textTwoEl.current,{
    strings:string,
    typeSpeed:80,
    backSpeed:50,
    backDelay:50,
    showCursor:false,
    loop:true

})

return ()=>{
    typeName.destroy();
    typeInfo.destroy()
}
    }, [])
    

    return(
        <Box  sx={{textAlign:"center",alignItems:"center",justifyContent:"center",padding:10}}>
            <Typography  variant="h2" color="primary" ref={textOneEl}></Typography>
            <Typography  variant="h4" color="initial" ref={textTwoEl}></Typography>

        </Box>
    )
}

export default Typedjs;