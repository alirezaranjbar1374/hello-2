const INITIAL_STATE = {
    user:[],
    erros:[]
};

 
 export const UserregisterReducer= (state = INITIAL_STATE, action) => {
     console.log("stateusers-REducer",state,action);
    switch (action.type) {
        case "USER_REGISTER_REQUSET":
            return {
                loading:true,
                user:[],
                erros:[]
            }
        case "REGISTER_RESPONSE":
            return{
                loading:false,
                user:action.payload,
                erros:[]
            } 
            case "REGISTER_VALID_ERR":
                return {
                    loading:false,
                    user:[],
                    erros:action.payload
                }
     
        default:
            return state
    }
}