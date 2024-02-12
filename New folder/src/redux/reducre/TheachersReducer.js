const INITIAL_STATE = {
    theacher:[]
};
const INITIAL_STATE_Teacher = {
    theacher:{}
};
 
 export const TheacherReducer= (state = INITIAL_STATE, action) => {
     console.log("statetheachers11111-REducer",state,action);
    switch (action.type) {
        case "THEACHER_LIST_REQUSET":
            return {
                loading:true,
                theacher:[]
            }
        case "THEACHERS_LIST_SUCSSES":
            return{
                loading:false,
                theacher:action.payload
            }    
            
        default:
            return state
    }
}

export const Theacher_one_Reducer= (state = { theacher1: {} }, action) => {
    // console.log("statetheachers_one-REducer",state,action);
   switch (action.type) {
       case "THEACHER_DETIL_REQUSET":
           return {
            ...state,
               loading:true
           }
       case "THEACHERS_DETIL_SUCSSES":
           return{
               loading:false,
               theacher1:action.payload
           }    
           
       default:
           return state
   }
}


