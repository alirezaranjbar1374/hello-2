const INITIAL_STATE = {
    user:[]
};

 
 export const userdetilReducer= (state = INITIAL_STATE, action) => {
    //  console.log("stateusers-REducer",state,action);
    switch (action.type) {
        case "USER_DETIL_REQUSET":
            return {
                loading:true,
                user:[]
            }
        case "USER_DETIL_SUCSSES":
            return{
                loading:false,
                user:action.payload
            }    
            
        default:
            return state
    }
}