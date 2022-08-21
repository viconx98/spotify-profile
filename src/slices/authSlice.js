import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
let IS_DEPLOY = true
let REDIRECT_URL = IS_DEPLOY ? "https://shiny-phoenix-5585da.netlify.app/callback" : "http://localhost:3000/callback"

let initialToken = JSON.parse(localStorage.getItem("token")) || null
let initialAuth = initialToken !== null

export function authUrl() {
    let scopes = ["user-top-read", "user-follow-read", "playlist-read-collaborative", "playlist-read-private", "user-read-recently-played"]

    let queryParams = new URLSearchParams({
        response_type: "code",
        client_id: "7cca2b4bab474f14b542d1b17510cacf",
        redirect_uri: REDIRECT_URL,
        scope: scopes.join(" ")
    })

    return "https://accounts.spotify.com/authorize?" + queryParams.toString()
}

export const requestHeaders = (token) => {
    return {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json'"
    }
}

export const requestOptions = (headers) => {
    return {
        method: "GET",
        headers: headers
    }
}

const exchangeCode = createAsyncThunk(
    "authSlice/exchangeCode",
    async (code, { getState }) => {
        let { redirectUri, clientId, clientSecret } = getState().auth

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

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        redirectUri: REDIRECT_URL,
        clientId: "7cca2b4bab474f14b542d1b17510cacf",
        clientSecret: "084777da3470442abadec778801bd3cd",
        token: initialToken,
        isAuthComplete: initialAuth
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
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




const { setToken } = authSlice.actions

export { setToken, exchangeCode }
export default authSlice.reducer