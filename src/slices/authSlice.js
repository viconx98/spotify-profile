import { createSlice } from "@reduxjs/toolkit"

let currentTokenStr = localStorage.getItem("token") || null
let currentToken = JSON.parse(currentTokenStr)

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        token: currentToken
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
        }
    }
})

export const { setToken } = authSlice.actions

export default authSlice.reducer