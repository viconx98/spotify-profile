import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { profileActions } from "./profileSlice"
import { topArtistsActions } from "./topArtistsSlice"
import { topTracksActions } from "./topTracksSlice"
import { recentActions } from "./recentSlice"
import { playlistActions } from "./playlistSlice"

let initialToken = JSON.parse(localStorage.getItem("token")) || null
let initialAuth = initialToken !== null

const requestHeaders = (token) => {
    return {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json'"
    }
}

const requestOptions = (headers) => {
    return {
        method: "GET",
        headers: headers
    }
}

const exchangeCode = createAsyncThunk(
    "apiSlice/exchangeCode",
    async (code, { getState }) => {
        let { redirectUri, clientId, clientSecret } = getState().api

        let body = new URLSearchParams({
            grant_type: "authorization_code",
            "code": code,
            redirect_uri: redirectUri,
            client_id: clientId,
            client_secret: clientSecret
        })

        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "body": body.toString()
        }


        let url = "https://accounts.spotify.com/api/token"

        let response = await fetch(url, options)
        let responseJson = await response.json()

        localStorage.setItem("token", JSON.stringify(responseJson))

        return {
            status: response.status,
            data: responseJson
        }
    }
)

// Profile
const getUser = createAsyncThunk(
    "apiSlice/getUser",
    async (_, { getState, dispatch }) => {
        dispatch(profileActions.setIsLoading(true))
        let { token } = getState().api
        let url = "https://api.spotify.com/v1/me"

        let headers = requestHeaders(token.access_token)
        let options = requestOptions(headers)

        let response = await fetch(url, options)
        let responseJson = await response.json()

        dispatch(profileActions.setUser(responseJson))

        return {
            status: response.status,
            data: responseJson
        }
    }
)

const getUserTopArtists = createAsyncThunk(
    "apiSlice/getUserTopArtists",
    async (code, { getState, dispatch }) => {
        let { token } = getState().api
        // Top Artists
        let url = "https://api.spotify.com/v1/me/top/artists"

        let headers = requestHeaders(token.access_token)
        let options = requestOptions(headers)

        let response = await fetch(url, options)
        let responseJson = await response.json()

        dispatch(profileActions.setUserTopArtists(responseJson.items))

        return {
            status: response.status,
            data: responseJson
        }
    }
)

const getUserTopTracks = createAsyncThunk(
    "apiSlice/getUserTopTracks",
    async (code, { getState, dispatch }) => {
        let { token } = getState().api
        // Top Artists
        let url = "https://api.spotify.com/v1/me/top/tracks"

        let headers = requestHeaders(token.access_token)
        let options = requestOptions(headers)

        let response = await fetch(url, options)
        let responseJson = await response.json()

        dispatch(profileActions.setUserTopArtists(responseJson.items))

        return {
            status: response.status,
            data: responseJson
        }
    }
)

const getUserStats = createAsyncThunk(
    "apiSlice/getUserStats",
    async (code, { getState, dispatch }) => {
        let { token } = getState().api
        // Following
        let url = "https://api.spotify.com/v1/me/following?type=artist"

        let headers = requestHeaders(token.access_token)
        let options = requestOptions(headers)

        let response = await fetch(url, options)
        let responseJson = await response.json()

        dispatch(profileActions.setFollowing(responseJson.artists.total))

        // Playlists
        url = "https://api.spotify.com/v1/me/playlists"

        response = await fetch(url, options)
        responseJson = await response.json()

        dispatch(profileActions.setPlaylists(responseJson.total))
        dispatch(profileActions.setIsLoading(false))

        return {
            status: response.status,
            data: responseJson
        }
    }
)

// Top Artists
const getUserTopArtistsMain = createAsyncThunk(
    "apiSlice/getUserTopArtistsMain",
    async (code, { getState, dispatch }) => {
        dispatch(topArtistsActions.setIsLoading(true))
        let { token } = getState().api
        // Top Artists
        let url = "https://api.spotify.com/v1/me/top/artists"

        let headers = requestHeaders(token.access_token)
        let options = requestOptions(headers)

        let response = await fetch(url, options)
        let responseJson = await response.json()


        dispatch(topArtistsActions.setTopArtists(responseJson.items))
        dispatch(topArtistsActions.setIsLoading(false))

        return {
            status: response.status,
            data: responseJson
        }
    }
)

// Top Tracks
const getUserTopTracksMain = createAsyncThunk(
    "apiSlice/getUserTopArtistsMain",
    async (_, { getState, dispatch }) => {
        dispatch(topTracksActions.setIsLoading(true))
        let { token } = getState().api
        // Top Artists
        let url = "https://api.spotify.com/v1/me/top/tracks"

        let headers = requestHeaders(token.access_token)
        let options = requestOptions(headers)

        let response = await fetch(url, options)
        let responseJson = await response.json()


        dispatch(topTracksActions.setTopTracks(responseJson.items))
        dispatch(topTracksActions.setIsLoading(false))

        return {
            status: response.status,
            data: responseJson
        }
    }
)

// Recents
const getUserRecentTracks = createAsyncThunk(
    "apiSlice/getUserRecentTracks",
    async (_, { getState, dispatch }) => {
        dispatch(recentActions.setIsLoading(true))
        let { token } = getState().api
        let url = "https://api.spotify.com/v1/me/player/recently-played"

        let headers = requestHeaders(token.access_token)
        let options = requestOptions(headers)

        let response = await fetch(url, options)
        let responseJson = await response.json()

        dispatch(recentActions.setRecents(responseJson.items))
        dispatch(recentActions.setIsLoading(false))
    }
)

// Playlists
const getUserPlaylists = createAsyncThunk(
    "apiSlice/getUserPlaylists",
    async (_, { getState, dispatch }) => {
        dispatch(playlistActions.setIsLoading(true))

        let { token } = getState().api

        let url = `https://api.spotify.com/v1/me/playlists`

        let headers = requestHeaders(token.access_token)
        let options = requestOptions(headers)

        let response = await fetch(url, options)
        let responseJson = await response.json()

        dispatch(playlistActions.setPlaylists(responseJson.items))
        dispatch(playlistActions.setIsLoading(false))
    }
)

const apiSlice = createSlice({
    name: "apiSlice",
    initialState: {
        redirectUri: "http://localhost:3000/callback",
        clientId: "13d4952ae4e046d4bf81fb23f41a9399",
        clientSecret: "",
        token: initialToken,
        isAuthComplete: initialAuth
    },
    reducers: {
        setToken(state, action) {

        }
    },
    // TODO: Handle Reject
    extraReducers: (builder) => {
        // Exchange Code
        builder.addCase(exchangeCode.fulfilled, (state, action) => {
            if (action.payload.status === 200) {
                state.token = action.payload.data
                state.isAuthComplete = true
            }
        })
    }
})




const { setToken } = apiSlice.actions

export function authUrl() {
    let scopes = ["user-top-read", "user-follow-read", "playlist-read-collaborative", "playlist-read-private", "user-read-recently-played"]

    let queryParams = new URLSearchParams({
        response_type: "code",
        client_id: "13d4952ae4e046d4bf81fb23f41a9399",
        redirect_uri: "http://localhost:3000/callback",
        scope: scopes.join(" ")
    })

    return "https://accounts.spotify.com/authorize?" + queryParams.toString()
}

export { setToken, exchangeCode, getUser, getUserTopArtists, getUserTopTracks,getUserPlaylists, getUserStats, getUserTopArtistsMain, getUserTopTracksMain, getUserRecentTracks }
export default apiSlice.reducer