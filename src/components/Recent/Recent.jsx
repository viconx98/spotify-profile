import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Loading from "../Loading/Loading"
import Track from "../Track/Track"
import "./Recent.css"
import { getUserRecentTracks } from "../../slices/apiSlice"

const tempTrack = {
    album: {
        images: [1, 2, "test"],
        artists: [],
        name: "album"
    },
    external_urls: {
        spotify: "www.example.com"
    },
    name: "Test",
    duration_ms: 200000
}

export default function Recent() {
    const dispatch = useDispatch()
    const { recents, isLoading } = useSelector(state => state.recent)

    useEffect(() => {
        if (recents === null) {
            dispatch(getUserRecentTracks())
        }
    }, [])

    const drawTrack = (track) => <Track key={track.id} track={track} />

    return <div className="recent">
        {
            isLoading
                ? <Loading />
                : <div className="container">
                    <h3>Recently Played</h3>
                    <div className="recent-track-list">
                        {
                            recents.length === 0
                            ? <p>You have no recently played tracks</p>
                            : recents.map(drawTrack)
                        }
                    </div>
                </div>
        }
    </div>

}