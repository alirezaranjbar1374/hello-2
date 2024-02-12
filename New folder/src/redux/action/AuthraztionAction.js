import axios from "axios";
import { RegisterSchema } from "../../Validation/RegisterValidation/RegisterValidation";
import swal from "sweetalert";
import { addUser } from "./User";
import { decodeToken } from "../../utils/DecodeToken";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../../Validation/Loginvalidation/LogonValidation";

export const RegisterAction = (user) => {
    return async dispatch => {
        try {
            dispatch({type:"USER_REGISTER_REQUSET"})
            await RegisterSchema.validate(user,{abortEarly:false})

        const datasend= await  axios.post("http://localhost:3001/api/user/register",user).then(res=>{
     
// console.log("res",res);

            swal({
				title:"کاربر با موفقیت  ساخته شد (:",
				icon:"success",
				buttons:"متوجه شدم"
			})
         
                  
                    }).catch(err=>{
                        console.log("errredux",err);
                        swal({
                            title:err.response.data.message,
                            icon:"error",
                            buttons:"متوجه شدم"
                        })

                    })
                
        dispatch({
            type:"REGISTER_RESPONSE",
            payload:user 
        })
        } catch (e) {
            dispatch({
                type:"REGISTER_VALID_ERR",
                payload:e.inner
            })
            console.log("errredux2",e.inner);
            
         
        }
    };
}

export const LoginAction = (user,navigate) => {


    console.log("1",user);

    

    return async dispatch => {

        try {
            dispatch({type:"USER_LOGIN_REQUSET"})
            await LoginSchema.validate(user,{abortEarly:false})
            console.log("2");

        const datasend1= await  axios.post("http://localhost:3001/api/user/login",user).then(res=>{

         
            swal({
				title:"کاربر با موفقیت وارد شد (:",
				icon:"success",
				buttons:"متوجه شدم"
			})
            //  console.log("==========",navigate('/'));
            navigate('/')
            localStorage.setItem("token-login",res.headers["x-auth-token"])
           

            // window.location.href="http://localhost:3000"
// setPassword("");
// setEmail("");

dispatch(addUser(decodeToken(res.headers["x-auth-token"]).payload))
            
                  
                    }).catch(err=>{
                        console.log("errredux",err);
                        swal({
                            title:err.response.data.message,
                            icon:"error",
                            buttons:"متوجه شدم"
                        })

                    })
                
        dispatch({
            type:"LOGIN_RESPONSE",
            payload:user 
        })
        

        } catch (e) {
            dispatch({
                type:"LOGIN_VALID_ERR",
                payload:e.inner
            })
            console.log("errredux2",e.inner);
            
         
        }
    };
}
