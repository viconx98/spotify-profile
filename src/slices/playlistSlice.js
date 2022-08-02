import { createSlice } from "@reduxjs/toolkit"

const playlistSlice = createSlice({
    name: "playlistSlice",
    initialState: {
        isLoading: true,
        playlists: null
    },
    reducers: {
        setPlaylists(state, action) {
            state.playlists = action.payload
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload
        }
    }
})

export const playlistActions = { ...playlistSlice.actions }
export default playlistSlice.reducer