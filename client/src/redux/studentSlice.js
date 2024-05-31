import { createSlice } from "@reduxjs/toolkit";

const studentSlice=createSlice({
    name:'student',
    initialState:{
        authToken:null,
    },
    reducers:{
        setAuthToken:(state,action)=>{
            state.authToken = `Bearer ${action.payload}`;
        },
    }
})

export const {setAuthToken}=studentSlice.actions;
export default studentSlice.reducer;