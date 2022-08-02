import { createSlice } from "@reduxjs/toolkit"

const recentSlice = createSlice({
    name: "recentSlice",
    initialState: {
        isLoading: true,
        recents: null
    },
    reducers: {
        setRecents(state, action) {
            state.recents = action.payload
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload
        }
    }
})

export const recentActions = { ...recentSlice.actions }
export default recentSlice.reducer