import "./Playlists.css"
import { useSelector, useDispatch } from "react-redux"
import Loading from "../Loading/Loading"
import Playlist from "../Playlist/Playlist"
import { useEffect } from "react"
import { playlistAsyncActions } from "../../slices/playlistSlice"

export default function Playlists() {
    const dispatch = useDispatch()
    const { playlists, isLoading } = useSelector(state => state.playlist)

    useEffect(() => {
        if (playlists === null) {
            dispatch(playlistAsyncActions.getUserPlaylists())
        }
    }, [])

    const drawPlaylist = (playlist) => <Playlist key={playlist.id} playlist={playlist} />

    return <div className="playlists">
        {
            isLoading
                ? <Loading />
                : <div className="container">
                    <h3>Your Playlists</h3>
                    <div className="wrapper">
                        <div className="playlist-list">
                            {playlists.map(drawPlaylist)}
                        </div>
                    </div>
                </div>

        }
    </div>
}