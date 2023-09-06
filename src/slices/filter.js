import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    Country: [],
}



const filterReducer = createSlice({
    name: 'filterReducer',
    initialState,
    reducers: {
        FILTERPROP(state , action){
            state.Country = action.payload;
        },
        
    },

})
export const {FILTERPROP,CHECK} = filterReducer.actions;

export const filterReducers = filterReducer.reducer;



