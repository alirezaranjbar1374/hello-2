import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { TheacherReducer,Theacher_one_Reducer } from './reducre/TheachersReducer';
import { USERreducer } from './reducre/UserReducer';
import { cartReducer } from './reducre/CartReducer';
import { userdetilReducer } from './reducre/UserDetil';
import { UserregisterReducer } from './reducre/UserregisterReducer';
import { UserLoginReducer } from './reducre/UserLoginReducer';
import { ArticelReducer } from './reducre/ParticalReducer';


const reducer=combineReducers({
    ThecherList:TheacherReducer,
    TeacherDetil:Theacher_one_Reducer,
    USERreducer:USERreducer,
    userdetilReducer:userdetilReducer,
    cart:cartReducer,
    UserregisterReducer:UserregisterReducer,
    UserLoginReducer:UserLoginReducer,
    ArticelReducer:ArticelReducer
})
const cartItemsFromlocalstoreg=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")) :[]
const intialState={
    cart:{cartItems:cartItemsFromlocalstoreg}
}
const middelware=[thunk]
const store = createStore(reducer,intialState,applyMiddleware(...middelware))

export default store;