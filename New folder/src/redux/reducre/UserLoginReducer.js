const INITIAL_STATE = {
    user:[],
    erros:[]
};

 
 export const UserLoginReducer= (state = INITIAL_STATE, action) => {
     console.log("stateusers-REducer_login",state,action);
    switch (action.type) {
        case "USER_LOGIN_REQUSET":
            
            return {
                loading:true,
                user:[],
                erros:[]
            }
        case "LOGIN_RESPONSE":
            return{
                loading:false,
                user:action.payload,
                erros:[]
            } 
            case "LOGIN_VALID_ERR":
                return {
                    loading:false,
                    user:[],
                    erros:action.payload
                }
     
        default:
            return state
    }
}