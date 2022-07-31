import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice"
import topArtistsReducer from "./slices/topArtistsSlice"
import topTracksReducer from "./slices/topTracksSlice"

const spotifyStore = configureStore({
    reducer: {
        ui: uiReducer,
        topArtists: topArtistsReducer,
        topTracks: topTracksReducer
    }
})

export default spotifyStore