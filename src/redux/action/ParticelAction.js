import axios from "axios";

export const ArticelListAction = () => {
    return async dispatch => {
        try {
        dispatch({type:"ARTICEL_LIST_REQUSET"})
        const {data}= await  axios.get("http://localhost:3001/api/user/allarticels");
  
        dispatch({
            type:"ARTICELUSER_LIST_SUCSSES",
            payload:data
        })
        } catch (e) {
            console.log("err",e);
        }
    };
};