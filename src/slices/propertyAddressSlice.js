import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    propAddress: [],
    LASTAddress:[],
}



const propAddressReducer = createSlice({
    name: 'PropAddress',
    initialState,
    reducers: {
        PROPADDRESS(state , action){
            state.propAddress = action.payload;
        },
        LASTADDRESS(state , action){
            state.LASTAddress = action.payload;
        },
        
    },

})
export const {PROPADDRESS , LASTADDRESS} = propAddressReducer.actions;

export const propAddressReducers = propAddressReducer.reducer;



