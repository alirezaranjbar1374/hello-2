import axios from "axios";

export const UserDetilAction = (id) => {
    return async dispatch => {
        try {
        dispatch({type:"USER_DETIL_REQUSET"})
        const header = {
            
            headers: {
              "x-auth-token":localStorage.getItem("token-login")
    
        
               }
               
         };
        const {data}= await  axios.get(`http://localhost:3001/api/user/userdetil/${id}`,header);
        dispatch({
            type:"USER_DETIL_SUCSSES",
            payload:data
        })
        } catch (e) {
            console.log("err",e);
        }
    };
};