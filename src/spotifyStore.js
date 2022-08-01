import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice"
import topArtistsReducer from "./slices/topArtistsSlice"
import topTracksReducer from "./slices/topTracksSlice"
import profileReducer from "./slices/profileSlice"
import apiReducer from "./slices/apiSlice"

const spotifyStore = configureStore({
    reducer: {
        api: apiReducer,
        ui: uiReducer,
        profile: profileReducer,
        topArtists: topArtistsReducer,
        topTracks: topTracksReducer
    }
})

export default spotifyStore