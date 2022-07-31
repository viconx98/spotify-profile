import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice"
import topArtistsReducer from "./slices/topArtistsSlice"

const spotifyStore = configureStore({
    reducer: {
        ui: uiReducer,
        topArtists: topArtistsReducer
    }
})

export default spotifyStore