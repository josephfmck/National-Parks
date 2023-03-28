import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import service from './service';


const initialState = {
    apiData: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
};

//!THUNKS - async actions
//*Fetch Data from api
    //?slice/fetchData - name of slice / name of action
export const fetchData = createAsyncThunk('slice/fetchData', async (thunkAPI) => {
    try {
        //dispatch req with service's getAPIdata action
        return await service.getApiData();
    } catch (error) {
        //? return error message as payload instead
        const message = (
            error.response && 
            error.response.data && 
            error.response.data.message) || 
            error.message || 
            error.toString();
            return thunkAPI.rejectWithValue(message);
    }
});




//!MAIN SLICE 
export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        resetStatus : (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload;
                state.apiData = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.apiData = [];
            })
    }
});


export const {resetStatus} = slice.actions;
export default slice.reducer;