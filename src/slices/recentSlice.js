import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { requestHeaders, requestOptions } from "./authSlice"

const getUserRecentTracks = createAsyncThunk(
    "recentSlice/getUserRecentTracks",
    async (_, { getState }) => {
        let { token } = getState().auth
        let url = "https://api.spotify.com/v1/me/player/recently-played"

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
    },
    extraReducers: (builder) => {
        // Get User Recents
        builder.addCase(getUserRecentTracks.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getUserRecentTracks.fulfilled, (state, action) => {
            state.recents = action.payload.data
            state.isLoading = false
        })
    }
})

export const recentActions = { ...recentSlice.actions }
export const recentAsyncActions = {
    getUserRecentTracks
}
export default recentSlice.reducer