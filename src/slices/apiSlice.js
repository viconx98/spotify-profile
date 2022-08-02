import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

let initialToken = JSON.parse(localStorage.getItem("token")) || null
let initialAuth = initialToken !== null

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

const apiSlice = createSlice({
    name: "apiSlice",
    initialState: {
        redirectUri: "http://localhost:3000/callback",
        clientId: "13d4952ae4e046d4bf81fb23f41a9399",
        clientSecret: "7b75c404698a4d068a78e8df369849fc",
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




const { setToken } = apiSlice.actions



export { setToken, exchangeCode }
export default apiSlice.reducer