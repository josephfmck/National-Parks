import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import authService from './authService';


const initialState = {
    isLoading: false
};

//!THUNKS - async actions


//!MAIN SLICE 
export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        callLoading: (state) => {
            state.isLoading = true;
        }
    }
});


export const {callLoading} = slice.actions;
export default slice.reducer;