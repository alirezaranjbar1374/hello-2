const INITIAL_STATE = {
    articel:[]
};
const INITIAL_STATE_articel = {
    articel:{}
};
 
 export const ArticelReducer= (state = INITIAL_STATE, action) => {
    console.log("artcelreducer",state,action);
    switch (action.type) {
        case "ARTICEL_LIST_REQUSET":
            return {
                loading:true,
                articel:[]
            }
        case "ARTICELUSER_LIST_SUCSSES":
            return{
                loading:false,
                articel:action.payload
            }    
            
        default:
            return state
    }
}
