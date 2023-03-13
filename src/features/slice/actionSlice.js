
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import resources from '../../resources'
import instance from '../../instance'

const initialState = {
    loading: false,
    actions: [],
    error: ''
}

export const fetchAction = createAsyncThunk('moviesTypes', () => {
    return instance.get(resources.Action_url)
        .then(respons => respons.data.results)
})
export const movieActionSlice = createSlice({
    name: "netflix",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAction.pending, (state) => {
            state.loading = false
        })
        builder.addCase(fetchAction.fulfilled, (state, action) => {
            state.loading = false
            state.actions = action.payload
          
          
            state.error = ''
        })
        builder.addCase(fetchAction.rejected, (state, action) => {
            state.loading = false;
            state.actions = action.error;
            state.error = action.error.message;
        })
    }
})
export default movieActionSlice.reducer;