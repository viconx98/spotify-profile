import "./TopTracks.css"
import { useSelector, useDispatch } from "react-redux"
import { topTracksActions } from "../../slices/topTracksSlice"
import Track from "../Track/Track"
import Loading from "../Loading/Loading"
import { useEffect } from "react"
import { getUserTopTracksMain } from "../../slices/apiSlice"


export default function TopTracks() {
    const dispatch = useDispatch()
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

    useEffect(() => {
        console.log("useEffect > TopTracks")
        if (topTracks === null){
            dispatch(getUserTopTracksMain())
        }
        // eslint-disable-next-line
    }, [])

    const drawTrack = (track) => <Track key={track.id} track={track} />

    const drawFilter = (filter) => {
        let cls = filter.id === currentFilter ? "filter filter-selected" : "filter"
        return <p key={filter.id} className={cls} onClick={e => dispatch(topTracksActions.setCurrentFilter(filter.id))}>{filter.title}</p>
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
                        {
                            topTracks.length === 0
                                ? <p> You don't have any top tracks </p>
                                : topTracks.map(drawTrack)
                        }
                    </div>
                </div>
        }
    </div>
}

