import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavifationParams=()=>{
    let navigate = useNavigate();

    useEffect(() => {

      navigate("/")

    },[])
    return(

        null
        

    )
}

export default NavifationParams;