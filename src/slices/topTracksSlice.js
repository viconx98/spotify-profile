import { createSlice } from "@reduxjs/toolkit"

const topTracksSlice = createSlice({
    name: "topTracksSlice",
    initialState: {
        currentFilter: 1,
        isLoading: true,
        topTracks: null
    },
    reducers: {
        setCurrentFilter(state, action) {
            state.currentFilter = action.payload
        },
        setTopTracks(state, action){
            state.topTracks = action.payload
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload
        }
    }
})

export const { setCurrentFilter, setTopTracks,  setIsLoading} = topTracksSlice.actions

export default topTracksSlice.reducer