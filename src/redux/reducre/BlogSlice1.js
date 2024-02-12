import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    articells:[],
    status:"idel",
    error:null

}
export const fetchArticells=createAsyncThunk("articells/fetchArticells",async()=>{
    const response=await axios.get("http://localhost:3001/api/user/allarticels")

    console.log("responsearticel",response);
    return response.data
}) 
export  const ArticellsSlice=createSlice({
    name:"articells",
    initialState,
    reducers: {
        extraReducers:builder=>{
            builder
            .addCase(fetchArticells.pending , (state,action)=>{
                state.status="loading";
            })
            .addCase(fetchArticells.fulfilled,(state,action)=>{
                state.status="secc";
                state.articells=action.payload
            })
            .addCase(fetchArticells.rejected,(state,action)=>{
                state.status="feild";
                state.error=action.error.message
                
            })
    
        }
    }
 
})
export default fetchArticells.reducers
