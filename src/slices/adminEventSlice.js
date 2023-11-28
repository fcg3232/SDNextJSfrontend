import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    adminaddress: localStorage.getItem("adminaddress")
    ? JSON.parse(localStorage.getItem("adminaddress"))
    : [],
    // adminaddress: [],
}



const adminReducer = createSlice({
    name: 'adminReducerSlice',
    initialState,
    reducers: {
        ADDRESSES(state , action){
            state.adminaddress = action.payload;
            localStorage.setItem("adminaddress", JSON.stringify(state.adminaddress));
        },
        
    },

})
export const {ADDRESSES} = adminReducer.actions;

export const adminReducers = adminReducer.reducer;



