import { createSlice } from "@reduxjs/toolkit";

const expertSlice=createSlice({
    name:'expert',
    initialState:{
        authToken:null,
        expertData: null
    },
    reducers:{
        setAuthToken:(state,action)=>{
            state.authToken = `Bearer ${action.payload}`;
        },
        setExpertData: (state,action)=>{
            state.expertData = action.payload;
        }
    }
})

export const {setAuthToken, setExpertData}=expertSlice.actions;
export default expertSlice.reducer;