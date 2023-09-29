import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoggedIn:localStorage.getItem("isLoggedIn")||false,
    role:localStorage.getItem("role")||" ",
    date:localStorage.getItem("date")||{}
}


const authslice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
});

export default authslice.reducer;