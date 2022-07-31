import { createSlice } from "@reduxjs/toolkit"

const topArtistsSlice = createSlice({
    name: "topArtistsSlice",
    initialState: {
        currentFilter: 1
    },
    reducers: {
        setCurrentFilter(state, action) {
            state.currentFilter = action.payload
        }
    }
})

export const { setCurrentFilter } = topArtistsSlice.actions

export default topArtistsSlice.reducer