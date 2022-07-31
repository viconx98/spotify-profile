import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice"
import topArtistsReducer from "./slices/topArtistsSlice"
import topTracksReducer from "./slices/topTracksSlice"
import authReducer from "./slices/authSlice"
import profileReducer from "./slices/profileSlice"

const spotifyStore = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        profile: profileReducer,
        topArtists: topArtistsReducer,
        topTracks: topTracksReducer
    }
})

export default spotifyStore