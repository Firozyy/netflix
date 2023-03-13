
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import resources from '../../resources'
import instance from '../../instance'

const initialState = {
    loading: false,
    comdeys: [],
    error: ''
}

export const fetchComedy = createAsyncThunk('movie/comedy', () => {
    return instance.get(resources.Comedy_url)
        .then(respons => respons.data.results)
})
export const movieComedySlice = createSlice({
    name: "netflix",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchComedy.pending, (state) => {
            state.loading = false
        })
        builder.addCase(fetchComedy.fulfilled, (state, action) => {
            state.loading = false
            state.comdeys = action.payload
          
          
            state.error = ''
        })
        builder.addCase(fetchComedy.rejected, (state, action) => {
            state.loading = false;
            state.comdeys = action.error;
            state.error = action.error.message;
        })
    }
})
export default movieComedySlice.reducer;