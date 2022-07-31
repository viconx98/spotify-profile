import { createSlice } from "@reduxjs/toolkit"

const topTracksSlice = createSlice({
    name: "topTracksSlice",
    initialState: {
        currentFilter: 1
    },
    reducers: {
        setCurrentFilter(state, action) {
            state.currentFilter = action.payload
        }
    }
})

export const { setCurrentFilter } = topTracksSlice.actions

export default topTracksSlice.reducer