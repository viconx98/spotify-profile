import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { requestHeaders, requestOptions } from "./apiSlice"


const getUser = createAsyncThunk(
    "profileSlice/getUser",
    async (_, { getState, dispatch }) => {
        let { token } = getState().api
        let url = "https://api.spotify.com/v1/me"

        let headers = requestHeaders(token.access_token)
        let options = requestOptions(headers)

        let response = await fetch(url, options)
        let responseJson = await response.json()

        return {
            status: response.status,
            data: responseJson
        }
    }
)

const getUserTopArtists = createAsyncThunk(
    "profileSlice/getUserTopArtists",
    async (code, { getState, dispatch }) => {
        let { token } = getState().api
        // Top Artists
        let url = "https://api.spotify.com/v1/me/top/artists"

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

const getUserTopTracks = createAsyncThunk(
    "profileSlice/getUserTopTracks",
    async (code, { getState, dispatch }) => {
        let { token } = getState().api
        // Top Artists
        let url = "https://api.spotify.com/v1/me/top/tracks"

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

const getUserStats = createAsyncThunk(
    "profileSlice/getUserStats",
    async (_, { getState, dispatch }) => {
        let { token } = getState().api

        let data = {
            following: 0,
            playlists: 0
        }
        // Following
        let url = "https://api.spotify.com/v1/me/following?type=artist"

        let headers = requestHeaders(token.access_token)
        let options = requestOptions(headers)

        let response = await fetch(url, options)
        let responseJson = await response.json()

        data.following = responseJson.artists.total
        
        // Playlists
        url = "https://api.spotify.com/v1/me/playlists"
        
        response = await fetch(url, options)
        responseJson = await response.json()
        
        data.playlists = responseJson.total

        return {
            status: response.status,
            data: data
        }
    }
)

const profileSlice = createSlice({
    name: "profileSlice",
    initialState: {
        user: null,
        userTopArtists: null,
        userTopTracks: null,
        userFollowing: 0,
        userPlaylists: 0,
        isLoading: true
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
            state.user.following = 0
            state.user.playlists = 0
        },

        setUserTopArtists(state, action) {
            state.userTopArtists = action.payload
        },

        setUserTopTracks(state, action) {
            state.userTopTracks = action.payload
        },

        setIsLoading(state, action) {
            state.isLoading = action.payload
        },

        setFollowing(state, action) {
            state.userFollowing = action.payload
        },

        setPlaylists(state, action) {
            state.userPlaylists = action.payload
        }
    },
    extraReducers: (builder) => {
        // Get User
        builder.addCase(getUser.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload.data
        })

        // Get User Top Artists
        builder.addCase(getUserTopArtists.pending, (state, action) => {

        })
        builder.addCase(getUserTopArtists.fulfilled, (state, action) => {
            state.userTopArtists = action.payload.data
        })

        // Get User Top Tracks
        builder.addCase(getUserTopTracks.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getUserTopTracks.fulfilled, (state, action) => {
            state.userTopTracks = action.payload.data
        })

        // Get User Stats
        builder.addCase(getUserStats.pending, (state, action) => {
        })
        builder.addCase(getUserStats.fulfilled, (state, action) => {
            state.userFollowing = action.payload.data.following
            state.userPlaylists = action.payload.data.playlists
            state.isLoading = false
        })
    }
})

export const profileActions = {
    ...profileSlice.actions
}

export const profileAsyncActions = {
    getUser,
    getUserTopTracks,
    getUserTopArtists,
    getUserStats
}

export default profileSlice.reducer