import { createSlice } from "@reduxjs/toolkit";

const expertSlice=createSlice({
    name:'expert',
    initialState:{
        authToken:null,
    },
    reducers:{
        setAuthToken:(state,action)=>{
            state.authToken = `Bearer ${action.payload}`;
        },
    }
})

export const {setAuthToken}=expertSlice.actions;
export default expertSlice.reducer;