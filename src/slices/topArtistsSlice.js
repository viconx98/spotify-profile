import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { requestHeaders, requestOptions } from "./authSlice"
import { fakeArtists } from "../fakedata"

const getUserTopArtistsMain = createAsyncThunk(
    "topArtistsSlice/getUserTopArtistsMain",
    async (filter = "long_term", { getState }) => {
        let { token } = getState().auth
        let url = `https://api.spotify.com/v1/me/top/artists?time_range=${filter}`

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

const topArtistsSlice = createSlice({
    name: "topArtistsSlice",
    initialState: {
        currentFilter: "long_term",
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
    },
    extraReducers: (builder) => {
        // Get User Top Artists
        builder.addCase(getUserTopArtistsMain.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getUserTopArtistsMain.fulfilled, (state, action) => {
            state.topArtists = fakeArtists
            state.isLoading = false
        })
    }
})

export const topArtistsActions = { ...topArtistsSlice.actions }

export const topArtistsAsyncActions = {
    getUserTopArtistsMain
}
export default topArtistsSlice.reducer