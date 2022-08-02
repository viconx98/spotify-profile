import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { requestHeaders, requestOptions } from "./apiSlice"

const getUserPlaylists = createAsyncThunk(
    "playlistSlice/getUserPlaylists",
    async (_, { getState, dispatch }) => {
        let { token } = getState().api

        let url = `https://api.spotify.com/v1/me/playlists`

        let headers = requestHeaders(token.access_token)
        let options = requestOptions(headers)

        let response = await fetch(url, options)
        let responseJson = await response.json()

        return {
            status: response.status,
            data: responseJson.items
        }
    }
)

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
    },
    extraReducers: (builder) => {
        // Get User Recents
        builder.addCase(getUserPlaylists.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getUserPlaylists.fulfilled, (state, action) => {
            state.playlists = action.payload.data
            state.isLoading = false
        })
    }
})

export const playlistActions = { ...playlistSlice.actions }
export const playlistAsyncActions = {
    getUserPlaylists
}
export default playlistSlice.reducer