import "./TopTracks.css"
import { useSelector, useDispatch } from "react-redux"
import { setCurrentFilter, setTopTracks, setIsLoading } from "../../slices/topTracksSlice"
import Track from "../Track/Track"
import Loading from "../Loading/Loading"
import SpotifyAPI from "../../spotifyApi"
import { useEffect } from "react"


export default function TopTracks() {
    const dispatch = useDispatch()
    let { access_token: accessToken } = useSelector(state => state.auth.token)
    const { topTracks, currentFilter, isLoading } = useSelector(state => state.topTracks)

    const filters = [
        {
            id: 1,
            title: "All time"
        },
        {
            id: 2,
            title: "Last 6 Months"
        },
        {
            id: 3,
            title: "Last Month"
        }
    ]

    const loadTopTracks = async () => {
        let response = await SpotifyAPI.topTracks(accessToken)
        let jsonResponse = await response.json()

        console.log(jsonResponse)
        dispatch(setTopTracks(jsonResponse.tracks))
        dispatch(setIsLoading(false))
    }

    useEffect(() => {
        setTimeout(loadTopTracks, 2000)
    }, [])
    
    const drawTrack = (track) => <Track key={track.id} track={track}/>

    const drawFilter = (filter) => {
        let cls = filter.id === currentFilter ? "filter filter-selected" : "filter"
        return <p className={cls} onClick={e => dispatch(setCurrentFilter(filter.id))}>{filter.title}</p>
    }

    return <div className="top-tracks">
        {
            isLoading
            ? <Loading />
            : <div className="container">
                <div className="header">
                    <h3>Top Tracks</h3>
                    <div className="filters">
                        {filters.map(drawFilter)}
                    </div>
                </div>

                <div className="top-tracks-list">
                    {topTracks.map(drawTrack)}
                </div>
            </div>
        }
    </div>
}

