import { createSlice } from "@reduxjs/toolkit"

const topArtistsSlice = createSlice({
    name: "topArtistsSlice",
    initialState: {
        currentFilter: 1,
        isLoading: true,
        topArtists: null
    },
    reducers: {
        setCurrentFilter(state, action) {
            state.currentFilter = action.payload
        },
        setTopArtists(state, action) {
            state.topArtists = action.payload
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload
        }
    }
})

export const topArtistsActions = { ...topArtistsSlice.actions }
export default topArtistsSlice.reducer