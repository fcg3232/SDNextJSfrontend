import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    propDetails: [],
    propID:[],
    TokenCount:[],
}



const propDetailReducer = createSlice({
    name: 'propDetailReducerSlice',
    initialState,
    reducers: {
        PROPDETAIL(state , action){
            state.propDetails = action.payload;
        },
        PROPID(state , action){
            state.propID = action.payload;
        },
        TOKENCOUNT(state , action){
            state.TokenCount = action.payload;
        },
        
    },

})
export const {PROPDETAIL,PROPID, TOKENCOUNT} = propDetailReducer.actions;

export const propDetailReducers = propDetailReducer.reducer;



