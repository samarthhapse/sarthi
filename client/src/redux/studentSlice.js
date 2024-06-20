import { createSlice } from "@reduxjs/toolkit";

const studentSlice=createSlice({
    name:'student',
    initialState:{
        authToken:null,
        studentdata: null
    },
    reducers:{
        setAuthToken:(state,action)=>{
            state.authToken = `Bearer ${action.payload}`;
        },
        setStudentData: (state,action)=>{
            state.data = action.payload;
        }
    }
})

export const {setAuthToken, setStudentData}=studentSlice.actions;
export default studentSlice.reducer;