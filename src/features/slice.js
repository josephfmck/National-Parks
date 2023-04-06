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
    message2: '',
    onChangeVal: null,
    parkApiData: [],
    isLoading3: false,
    isError3: false,
    isSuccess3: false,
    message3: ''
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

//*Fetch Data from api for 1 park
export const fetchDataPark = createAsyncThunk('slice/fetchDataPark', async (thunkAPI) => {
    try {
        //dispatch service
        return await service.getApiDataPark();
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
        },
        onChangeVal : (state, action) => {
            state.onChangeVal = action.payload;
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
            .addCase(fetchDataPark.pending, (state) => {
                state.isLoading3 = true;
            })
            .addCase(fetchDataPark.fulfilled, (state, action) => {
                state.isLoading3 = false;
                state.isSuccess3 = true;
                state.message3 = action.payload;
                state.parkApiData = action.payload;
            })
            .addCase(fetchDataPark.rejected, (state, action) => {
                state.isLoading3 = false;
                state.isError3 = true;
                state.message3 = action.payload;
                state.parkApiData = [];
            })
    }
});


export const {resetStatus, onChangeVal} = slice.actions;
export default slice.reducer;