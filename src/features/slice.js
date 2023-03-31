import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import service from './service';

const initialState = {
    apiData: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
    sortedApiData: [],
    isLoading2: false,
    isError2: false,
    isSuccess2: false,
    message2: ''
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


//*Fetch Data from api THEN sort it by state
export const fetchDataSortedByState = createAsyncThunk('slice/fetchDataSortedByState', async (thunkAPI) => {
    try {
        //dispatch service
        return await service.getApiDataSortedByState();
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
            .addCase(fetchDataSortedByState.pending, (state) => {
                state.isLoading2 = true;
            })
            .addCase(fetchDataSortedByState.fulfilled, (state, action) => {
                state.isLoading2 = false;
                state.isSuccess2 = true;
                state.message2 = action.payload;
                state.sortedApiData = action.payload;
            })
            .addCase(fetchDataSortedByState.rejected, (state, action) => {
                state.isLoading2 = false;
                state.isError2 = true;
                state.message2 = action.payload;
                state.sortedApiData = [];
            })
    }
});


export const {resetStatus} = slice.actions;
export default slice.reducer;