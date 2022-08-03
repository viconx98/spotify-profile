import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { requestHeaders, requestOptions } from "./authSlice"
import { fakeTracks } from "../fakedata"


const getUserTopTracksMain = createAsyncThunk(
    "topTracksSlice/getUserTopArtistsMain",
    async (filter = "long_term", { getState }) => {
        let { token } = getState().auth
        let url = `https://api.spotify.com/v1/me/top/tracks?time_range=${filter}`

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

const topTracksSlice = createSlice({
    name: "topTracksSlice",
    initialState: {
        currentFilter: 'long_term',
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
    },
    extraReducers: (builder) => {
        // Get User Top Artists
        builder.addCase(getUserTopTracksMain.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getUserTopTracksMain.fulfilled, (state, action) => {
            state.topTracks = fakeTracks //action.payload.data
            state.isLoading = false
        })
    }
})

export const topTracksActions = {...topTracksSlice.actions}
export const topTracksAsyncActions = {
    getUserTopTracksMain
}
export default topTracksSlice.reducer