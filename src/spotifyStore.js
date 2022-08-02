import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice"
import topArtistsReducer from "./slices/topArtistsSlice"
import topTracksReducer from "./slices/topTracksSlice"
import profileReducer from "./slices/profileSlice"
import apiReducer from "./slices/apiSlice"
import recentReducer from "./slices/recentSlice"
import playlistReducer from "./slices/playlistSlice";

const spotifyStore = configureStore({
    reducer: {
        api: apiReducer,
        ui: uiReducer,
        profile: profileReducer,
        topArtists: topArtistsReducer,
        topTracks: topTracksReducer,
        recent: recentReducer,
        playlist: playlistReducer
    }
})

export default spotifyStore