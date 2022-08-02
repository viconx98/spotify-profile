import "./Playlists.css"
import { useSelector, useDispatch } from "react-redux"
import Loading from "../Loading/Loading"
import Playlist from "../Playlist/Playlist"
import { useEffect } from "react"
import { getUserPlaylists } from "../../slices/apiSlice"

export default function Playlists() {
    const dispatch = useDispatch()
    const { playlists, isLoading } = useSelector(state => state.playlist)

    useEffect(() => {
        if (playlists === null){
            dispatch(getUserPlaylists())
        }

        console.log(playlists)
    }, [])

    return <div className="playlists">
        {
            isLoading
            ? <Loading />
            : <div className="container">
                <h3>Your Playlists</h3>
                <div className="playlist-list">
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />

                </div>
            </div>
        }
    </div>
}