export const cartReducer=(state={cartItems:[]},action)=>{
switch(action.type){
    case 'CART_ADD_ITEM':
        const item=action.payload;
     const existingitem=  state.cartItems.find((i)=>i.product===item.product)
     if(existingitem){
         return {
             ...state,
              cartItems:state.cartItems.map((i)=>i.product==existingitem.product?item:i)

         }
     }else{
         return{
             ...state,
             cartItems:[...state.cartItems,item]
         }
     }
     case 'CART_REMOVE_ITEM':
         return{
             ...state,
             cartItems:state.cartItems.filter(item=>item.product!==action.payload)
         }
     default:
         return state
}


}