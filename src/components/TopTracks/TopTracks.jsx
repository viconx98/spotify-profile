import "./TopTracks.css"
import { useSelector, useDispatch } from "react-redux"
import { setCurrentFilter } from "../../slices/topTracksSlice"
import Track from "../Track/Track"

export default function TopTracks() {
    const dispatch = useDispatch()
    const {currentFilter} = useSelector(state => state.topTracks)

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

    const drawFilter = (filter) => {
        let cls = filter.id === currentFilter ? "filter filter-selected" : "filter"
        return <p className={cls} onClick={e => dispatch(setCurrentFilter(filter.id))}>{filter.title}</p>
    }

    return <div className="top-tracks">
        <div className="header">
            <h3>Top Tracks</h3>
            <div className="filters">
                {filters.map(drawFilter)}
            </div>
        </div>

        <div className="top-tracks-list">
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
        </div>
    </div>
}