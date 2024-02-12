import axios from "axios";

export const TheachersListAction = () => {
    return async dispatch => {
        try {
        dispatch({type:"THEACHER_LIST_REQUSET"})
        const {data}= await  axios.get("http://localhost:3001/api/AllTeacher");
        dispatch({
            type:"THEACHERS_LIST_SUCSSES",
            payload:data
        })
        } catch (e) {
            console.log("err",e);
        }
    };
};

export const TheacherOneAction = (id) => {
    return async dispatch => {
        try {
        dispatch({type:"THEACHER_DETIL_REQUSET"})
        const {data}= await  axios.get(`http://localhost:3001/api/AllTeacher/${id}`);

        dispatch({
            type:"THEACHERS_DETIL_SUCSSES",
            payload:data
        })
        } catch (e) {
            console.log("err",e);
        }
    };
};




