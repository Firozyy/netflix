import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import  resources from '../../resources'
import instance from '../../instance'

const initialState = {
    loading: false,
    movie : [],
   
    error: ''
}
export const fetchMOvie = createAsyncThunk('moviesType',() => {
    return instance.get(resources.fetchTrending)
        .then(res => res.data.results)
})

export const movieSlice = createSlice({
    name: "netflix",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchMOvie.pending, (state) => {
            state.loading = false
        })
        builder.addCase(fetchMOvie.fulfilled, (state, action) => {
            state.loading = false
            state.movie = action.payload
            state.error = ''
        })
        builder.addCase(fetchMOvie.rejected, (state,action) => {
            state.loading = false;
            state.movie = action.error;
            state.error = action.error.message;
        })
    }
})

export default movieSlice.reducer;
