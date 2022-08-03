import "./TopTracks.css"
import { useSelector, useDispatch } from "react-redux"
import { topTracksActions, topTracksAsyncActions } from "../../slices/topTracksSlice"
import Track from "../Track/Track"
import Loading from "../Loading/Loading"
import { useEffect } from "react"

export default function TopTracks() {
    const dispatch = useDispatch()

    const { topTracks, currentFilter, isLoading } = useSelector(state => state.topTracks)

    const filters = [
        {
            id: 'long_term',
            title: "All time"
        },
        {
            id: "medium_term",
            title: "Last 6 Months"
        },
        {
            id: "short_term",
            title: "Last Month"
        }
    ]

    useEffect(() => {
        if (topTracks === null) {
            dispatch(topTracksAsyncActions.getUserTopTracksMain())
        }
        // eslint-disable-next-line
    }, [])

    const drawTrack = (track) => <Track key={track.id} track={track} />

    const applyFilter = (filterId) => {
        dispatch(topTracksAsyncActions.getUserTopTracksMain(filterId))
        dispatch(topTracksActions.setCurrentFilter(filterId))
    }

    const drawFilter = (filter) => {
        let cls = filter.id === currentFilter ? "filter filter-selected" : "filter"
        return <p key={filter.id} className={cls} onClick={e => applyFilter(filter.id)}>{filter.title}</p>
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

                    <div className="wrapper">
                        <div className="top-tracks-list">
                            {
                                topTracks.length === 0
                                    ? <p> You don't have any top tracks </p>
                                    : topTracks.map(drawTrack)
                            }
                        </div>
                    </div>
                </div>
        }
    </div>
}

