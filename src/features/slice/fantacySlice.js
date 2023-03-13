
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import resources from '../../resources'
import instance from '../../instance'

const initialState = {
    loading: false,
    fantacy: [],
    error: ''
}

export const fetchFantavcy = createAsyncThunk('movie/Fantacy', () => {
    return instance.get(resources.Fntacy_url)
        .then(respons => respons.data.results)
})
export const MovieFAntacySlicer = createSlice({
    name: "netflix",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchFantavcy.pending, (state) => {
            state.loading = false
        })
        builder.addCase(fetchFantavcy.fulfilled, (state, action) => {
            state.loading = false
            state.fantacy = action.payload
          
          
            state.error = ''
        })
        builder.addCase(fetchFantavcy.rejected, (state, action) => {
            state.loading = false;
            state.fantacy = action.error;
            state.error = action.error.message;
        })
    }
})
export default MovieFAntacySlicer.reducer;